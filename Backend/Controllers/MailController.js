import MailTransporter from "../Config/MailTransporter.js";

const transporter = MailTransporter()

const SendMailToUser = async (req, res) => {
    const { sub, body, to } = req.body;
    // 3. Send mail
    console.log({ sub, body, to })
    try {
        const info = await transporter.sendMail({
            from: '"Todo App" <todo@app.com>',
            to: to,
            subject: sub,
            text: body,
            html: `<b>${body}</b>`,
        });

        console.log("Message sent:", info.messageId);
        res.status(200).json({ message: "Mail sent successfully" });
    }
    catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ message: "Failed to send mail" });
    }
}

export { SendMailToUser };