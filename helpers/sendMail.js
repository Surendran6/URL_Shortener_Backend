const nodemailer = require('nodemailer');


const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({
        service : "Gmail",
        auth : {
            user : "dran.dran.0123@gmail.com",
            pass : process.env.EMAIL_PASSWORD
        }
    })
    const mailDetails = {
        from : "dran.dran.0123@gmail.com",
        to : options.to,
        subject : options.subject,
        html : options.text
    }

    transporter.sendMail(mailDetails,function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
}

module.exports = sendEmail