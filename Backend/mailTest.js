import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "darkharshraj@gmail.com",
    pass: "yvml qcjh kqrq kmhf", // ✅
  },
});

// 3. Send mail
const info = await transporter.sendMail({
    from: '"Todo App" <todo@app.com>',
    to: "harshrajsinhgohil8626@gmail.com",
    subject: "Hello ✔",
    text: "demo mail from todo?",
    html: "<b>demo mail from todo?</b>",
});

// 4. Logs
console.log("Message sent:", info.messageId);
console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
