let tranport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'trueUsername@gmail.com',
		pass: 'truePassword'
	}
});

const mailOptions = {
	from: 'donotreply@qudocreative.io', // sender address
	to: 'info@fake.com', // list of receivers
	subject: 'Hello', // Subject line
	html: '<h1>this is a test mail.</h1>'// plain text body
};


//Need to export this function and make it promise based

transporter.sendMail(mailOptions, function (err, info) {
	if (err)
		console.log(err)
	else
		console.log(info);
})


