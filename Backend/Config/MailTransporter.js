import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";

configDotenv()

const MailTransporter = () => {
    // console.log("user", process.env.MAIL_TRANSPORT_USER, process.env.MAIL_TRANSPORT_KEY)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_TRANSPORT_USER,
            pass: process.env.MAIL_TRANSPORT_KEY,
        },
    });
    console.log("transporter created")
    return transporter;
}
export default MailTransporter;