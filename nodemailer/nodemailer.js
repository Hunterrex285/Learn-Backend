import { sendEmail } from "./nodemailer.config.js";
import { resetPassword, registered, verifyEmail } from "./mailTemplate.js";

const sendMail = async (email, data) => {
  try {
    if (!email) {
      throw new Error("Recipients are required.");
    }

    const purpose = data.purpose;
    
    console.log(process.env.SMTP_EMAIL)
    console.log(purpose)

    if (purpose === "VerifyEmail") {

      const verificationToken = data.token;

      await sendEmail({
        from: process.env.SMTP_EMAIL,
        to: email, // Corrected
        subject: `This is your verification token.`,
        message: verifyEmail.replace(`{Code}`, verificationToken),
      });
    }

    console.log(`Email sent successfully to ${email}`);
    return { success: true, message: "Completed sending mail" };
  } catch (error) {
    console.error("Error in sendMail:", error);
    return {
      success: false,
      message: "Error sending mail",
      error: error.message,
    };
  }
};

export { sendMail };
