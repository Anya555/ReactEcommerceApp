const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); //  node package that helps safely store passwords. Recommended to use with async
const { roles } = require("../roles");
// takes in a plain password value then uses bcrypt to hash the value and return the hashed value.
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// used when logging in to verify if the password is the same with the password the user provided when signing up
async function validatePassword(plainpassword, hashedpassword) {
  return await bcrypt.compare(plainpassword, hashedpassword);
}

// bodyParser package will parse the data sent through the form and attach it to the req.body object.
//Then provided data is then used to create a new user.
//After the user is created we can use the user’s ID to create a JWT, that JWT will be used to identify users
// and determine what resources they’ll be allowed to access.
module.exports = {
  signup: async (req, res, next) => {
    try {
      // console.log(req.body);
      const { firstName, lastName, email, password, role } = req.body;
      // ===========================================================//
      const user = await User.findOne({ email });
      if (user) return res.status(400).json({ status: "Email already exists" });

      // =============================================================//
      const hashedpassword = await hashPassword(password);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedpassword,
        role: role,
      });

      // The JWT_SECRET environmental variable holds a private key that is used when signing the JWT,
      //this key will also be used when parsing the JWT to verify that it hasn’t been compromised by an authorized party.
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      newUser.accessToken = accessToken;
      await newUser.save();
      res.json({
        data: newUser,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },

  //the validatePassword function is used to verify that the password is correct. When that’s done,
  // we can then create a new token for that user which will replace any previously issued token.
  // That token will ideally be sent by the user along in the header when trying to access any restricted route.

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ status: "Email does not exist" });
      }
      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ status: "Password is incorrect" });
      }
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      await User.findByIdAndUpdate(user._id, { accessToken });
      res.status(200).json({
        data: {
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          userId: user._id,
        },
        accessToken,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: "Data you entered doesn't match our records" });
    }
  },

  grantAccess: (action, resource) => {
    return async (req, res, next) => {
      try {
        const permission = roles.can(req.user.role)[action](resource);
        if (!permission.granted) {
          return res.status(401).json({
            status: "You don't have enough permission to perform this action",
          });
        }
        next();
      } catch (error) {
        next(error);
      }
    };
  },

  allowIfLoggedin: async (req, res, next) => {
    try {
      const user = res.locals.loggedInUser; // res.locals.loggedInUser variable holds the details of the logged-in user
      console.log("user", user);
      if (!user)
        return res.status(401).json({
          status: "You need to be logged in to access this route",
        });
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  },
};
