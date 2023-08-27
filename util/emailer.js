const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	auth: {
			user: 'stanjosh@gmail.com',
			pass: import.meta.env.EMAIL_PW,
		},
	secure: true,
});

const validateEmail = (email) => {
	return String(email)
  .toLowerCase()
  .match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

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
