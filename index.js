const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const cors = require("cors");
// const fs = require("fs");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hlw");
});


app.post("/contact", async (req, res) => {
    const {firstName, lastName, method, here, message } = req.body;
  
    console.log({ firstName, lastName, method, here, message });
  
    let transporter = nodemailer.createTransport({
      host: "digitalmna.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "admin@digitalmna.com",
        pass: "Adminmna@123",
      },
      from: "admin@digitalmna.com",
      tls: {
        rejectUnauthorized: false,
      },

    });
  
    // const htmlToSend = template(replacements);
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"DigitalMnA" <admin@digitalmna.com>',
      to: "admin@digitalmna.com",
      subject: "Contact Form",
      text: `
          <div>
              <div>Name: ${firstName}</div>
              <div>Phone: ${lastName}</div>
              <div>Email: ${method}</div>
              <div>Service: ${here}</div>
              <div>Message: ${message}</div>
          </div>
      `,
      html: `
              <div>
                  <div>Name: ${firstName}</div>
                  <div>Phone: ${lastName}</div>
                  <div>Email: ${method}</div>
                  <div>Service: ${here}</div>
              <div>Message: ${message}</div>
              </div>
          `,
    });
  
    // let info1 = await transporter.sendMail({
    //   from: '"Kushel Digi Solutions" <info@kusheldigi.com>',
    //   to: email,
    //   subject: "Contact Form",
    //   text: `
    //     Thank you
    //   `,
    //   html: `
    //           <div>
    //               <div>Thank you! we will get back to you</div>
    //           </div>
    //       `,
    // });


    res.json({ success: true, message: "Thank You! we will get back you shortly" });
  });


  app.post("/subscribe", async (req, res) => {
    const {firstName1, lastName1, email } = req.body;
  
    console.log({ firstName1, lastName1, email });
  
    let transporter = nodemailer.createTransport({
      host: "digitalmna.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "admin@digitalmna.com",
        pass: "Adminmna@123",
      },
      from: "admin@digitalmna.com",
      tls: {
        rejectUnauthorized: false,
      },

    });
  
    // const htmlToSend = template(replacements);
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"DigitalMnA" <admin@digitalmna.com>',
      to: "admin@digitalmna.com",
      subject: "Contact Form",
      text: `
          <div>
              <div>Name: ${firstName1}</div>
              <div>Phone: ${lastName1}</div>
              <div>Email: ${email}</div>
          </div>
      `,
      html: `
              <div>
                  <div>Name: ${firstName1}</div>
                  <div>Phone: ${lastName1}</div>
                  <div>Email: ${email}</div>
              </div>
          `,
    });
  
    let info1 = await transporter.sendMail({
      from: '"DigitalMnA" <admin@digitalmna.com>',
      to: email,
      subject: "Contact Form",
      text: `
        Thank you
      `,
      html: `
              <div>
                  <div>Thank you! we will get back to you</div>
              </div>
          `,
    });


    res.json({ success: true, message: "Thank You! we will get back you shortly" });
  });

app.listen(PORT, () => {
    console.log("server is runing on port", PORT);
  });