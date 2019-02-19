require('dotenv').config({ path: 'variables.env' });

module.exports = {
  PORT: process.env.PORT || 4000,
  MAIL_USER: process.env.MAIL_USER || "noreply@example.com",
  MAIL_PASS: process.env.MAIL_PASS || "secret-password",
  COMPANY_NAME: process.env.COMPANY_NAME || "Enter Your Company Name Here"
};
