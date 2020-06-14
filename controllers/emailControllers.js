const nodemailer = require("nodemailer");

module.exports = {
  handleEmail: (req, res) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "annapanas0906@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    const { name, email, message } = req.body;

    let mailOptions = {
      from: email,
      to: "annapanas0906@gmail.com",
      subject: "You received new email from " + name,
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).json({
          status: err,
        });
      } else {
        res.status(200).json({
          status: info.response,
        });
      }
    });
  },
};
