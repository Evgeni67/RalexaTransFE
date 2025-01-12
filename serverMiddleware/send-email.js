const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Apply bodyParser globally to parse JSON
module.exports = (req, res, next) => {
  bodyParser.json()(req, res, async (err) => {
    if (err) {
      console.error("Body Parser Error:", err);
      res.statusCode = 400;
      res.end("Invalid JSON");
      return;
    }

    if (req.method !== "POST") {
      res.statusCode = 405;
      res.end("Method Not Allowed");
      return;
    }

    const { name, email, company, phone } = req.body;

    if (!name || !email || !phone) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({ message: "All name, email, and phone fields are required." })
      );
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.abv.bg",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "gurov77@abv.bg",
        subject: "Нова форма за контакт",
        text: `
          Нова форма за контакт:
          Име: ${name}
          Телефон: ${phone}
          Имейл: ${email}
          Компания: ${company || "Не е посочено"}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Email sent successfully!" }));
    } catch (error) {
      console.error("Error sending email:", error);
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Failed to send email.", error }));
    }
  });
};
