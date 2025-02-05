//Template for reset password
export const resetPassword = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7fc; border-radius: 8px;">
  <div style="text-align: left; margin-bottom: 30px;">
    <img src="YOUR_LOGO_URL" alt="Logo" style="width: 100px; height: auto;" />
  </div>
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 28px; color: #4CAF50;">Password Reset Request</h1>
    <p style="font-size: 16px; color: #555;">We received a request to reset your password. If this was not you, please ignore this email. Otherwise, follow the instructions below to reset your password.</p>
  </div>
  <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="font-size: 24px; color: #333;">Reset Your Password</h2>
    <p style="font-size: 16px; color: #555;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 20px 0;">
      <a href="YOUR_RESET_LINK" style="background-color: #4CAF50; color: #ffffff; padding: 15px 30px; font-size: 16px; text-decoration: none; border-radius: 5px;">Reset Password</a>
    </div>
    <p style="font-size: 16px; color: #555;">If you did not request this, please ignore this message, and your password will remain unchanged.</p>
  </div>
  <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #999;">
    <p>If you have any questions or need assistance, feel free to <a href="mailto:support@yourplatform.com" style="color: #4CAF50;">contact us</a>.</p>
  </div>
</div>

`;


//Template for welcome email
export const registered = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7fc; border-radius: 8px;">
  <div style="text-align: left; margin-bottom: 30px;">
    <img src="YOUR_LOGO_URL" alt="Logo" style="width: 100px; height: auto;" />
  </div>
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 28px; color: #4CAF50;">Welcome to Our Community!</h1>
    <p style="font-size: 16px; color: #555;">We are thrilled to have you on board. You’ve successfully joined our platform, and we can’t wait to get started.</p>
  </div>
  <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="font-size: 24px; color: #333;">Here’s What You Can Do Next</h2>
    <ul style="font-size: 16px; color: #555; padding-left: 20px;">
      <li>Explore your dashboard and personalize your profile.</li>
      <li>Check out the helpful resources in the help center.</li>
      <li>Start using our platform to its fullest potential!</li>
    </ul>
    <p style="font-size: 16px; color: #555;">If you need any help or have questions, our support team is always here for you.</p>
  </div>
  <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #999;">
    <p>If you have any questions, feel free to <a href="mailto:support@yourplatform.com" style="color: #4CAF50;">contact us</a>.</p>
  </div>
</div>

`;


//Template for verify email
export const verifyEmail = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7fc; border-radius: 8px;">
  <div style="text-align: left; margin-bottom: 30px;">
    <img src="YOUR_LOGO_URL" alt="Logo" style="width: 100px; height: auto;" />
  </div>
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 28px; color: #4CAF50;">Verify Your Email Address</h1>
    <p style="font-size: 16px; color: #555;">Thank you for registering with us! To complete your registration, please verify your email address using the code below.</p>
  </div>
  <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <h2 style="font-size: 24px; color: #333;">{Your Verification Code}</h2>
    <p style="font-size: 20px; font-weight: bold; color: #4CAF50; background-color: #f4f7fc; padding: 10px; display: inline-block; border-radius: 5px;">123456</p>
    <p style="font-size: 16px; color: #555;">Enter this code in the verification field to confirm your email.</p>
    <p style="font-size: 16px; color: #555;">If you did not sign up for this account, please ignore this email, and no action will be taken.</p>
  </div>
  <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #999;">
    <p>If you have any questions or need assistance, feel free to <a href="mailto:support@yourplatform.com" style="color: #4CAF50;">contact us</a>.</p>
  </div>
</div>


`;