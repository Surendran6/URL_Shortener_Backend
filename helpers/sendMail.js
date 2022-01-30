const nodemailer = require('nodemailer');


const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({
        service : "Hotmail",
        auth : {
            user : "dran.customer96@hotmail.com",
            pass : process.env.EMAIL_PASSWORD,
        }
    })
    const mailDetails = {
        from : "dran.customer96@hotmail.com",
        to : options.to,
        subject : options.subject,
        html : options.text
    }
    
   
    // var transporter = nodemailer.createTransport({
    //     host: "smtp-mail.outlook.com", // hostname
    //     secureConnection: false, // TLS requires secureConnection to be false
    //     port: 587, // port for secure SMTP
    //     service : "Hotmail",
    //     tls: {
    //     ciphers:'SSLv3'
    //     },
        
    //     requireTLS:true,
    //     auth : {
    //         user : "dran.customer96@hotmail.com",
    //         pass : process.env.EMAIL_PASSWORD 
    //     }
    // })


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