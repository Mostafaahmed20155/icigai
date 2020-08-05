const nodemailer = require('nodemailer');

exports.getIndex = (req, res, next) => {
    res.status(200).render('homepage', {
      pageTitle: 'ICIGAI',
    });
  };

  exports.postContactUs = (req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const subject = req.body.subject;
    const messageContent = req.body.message;
    const mailBody = `
    <h2> You have a new message from ICIGAI</h2> <br>
    <h3> Contact info</h3>
    <hr>
    <P>Full name: ${fullName}</P>
    <P>Email Address: ${email}</P>
    <P>Message Content</P>
    <p> ${messageContent} </p>
    `;
    async function main() {
      // Generate test SMTP service account from ethereal.email
  
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'mostafa.ahmed20147@gmail.com', // generated ethereal user
          pass: 'Warmastered.20', // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      console.log(email)
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${fullName}" <${email}>`, // sender address
        to: "mostafa.saad127@yahoo.com ", // list of receivers
        subject: `${subject}`, // Subject line
        text: "Hello world?", // plain text body
        html: mailBody, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

    res.render('post-contacting', {
      pageTitle: 'Thank You For Reaching Out'
    });

  }