let tranport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'trueUsername@gmail.com',
		pass: 'truePassword'
	}
});

const mailOptions = {
	from: 'donotreply@qudocreative.io', // sender address
	to: 'lucashugdahl@hotmail.com', // list of receivers
	subject: 'Password Reset', // Subject line
	html: '<h1>this is a test mail.</h1>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
	if (err)
		console.log(err)
	else
		console.log(info);
})


