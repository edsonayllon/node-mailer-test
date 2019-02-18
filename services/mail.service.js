var nodeMailer = require("nodemailer");
var EmailTemplate = require('email-templates').EmailTemplate;


var sendResetPasswordLink = transporter.templateSender(
  new EmailTemplate('../templates/resetPassword'), {
    	from: 'hello@yourdomain.com',
  });

exports.sendPasswordReset = function (email, username, name, tokenUrl) {
    // transporter.template
    sendResetPasswordLink({
        to: email,
        subject: 'Password Reset - YourDomain.com'
    }, {
        name: name,
        username: username,
        token: tokenUrl
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });
};
