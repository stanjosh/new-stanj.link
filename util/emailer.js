const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	auth: {
			user: 'stanjosh@gmail.com',
			pass: process.env.EMAIL_PW,
		},
	secure: true,
});

0

const sendEmail = async (email, name, subject, message) => {
  
  try {
    if (validateEmail(email)) {
      let mailData = {
        from: email,
        to: 'stanjosh@gmail.com',
        subject: `Message from stanj.link`,
        html: `from: ${email} <b>${name}</b> 
            <br> <b>${subject}</b> 
            <br>${message}<br/>`,
      };
      return transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err)
          throw new Error(err)
        }
        else {
          console.log(info.messageId, info.response)
          return info.response
        }
      }) 
    } else {
      throw new Error('Email address is not valid.')
    }
  } catch(err) {
    throw err
  }
}



module.exports = { sendEmail, validateEmail };
