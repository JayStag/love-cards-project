// const nodemailer = require('nodemailer');
// const mailjet = require('node-mailjet');

// // const auth = {
// //     auth: {
// //       api_key: '58b944b645103dcf237b9d231686a83a',
// //       domain: 'eb43907120a5012cb503ab126c8c5cd2' 
// //     }
// //   };
  
// const transporter = nodemailer.createTransport(mailjet(connect('58b944b645103dcf237b9d231686a83a', 'eb43907120a5012cb503ab126c8c5cd2')));


// const sendMail = (name, email, cb) => {
//   const mailOptions = {
//     name,
//     email,
//     to: 'jay20015@msn.com',
    
//   };
  
//   transporter.sendMail(mailOptions, function(err, data) {
//     if(err) {
//       cb(err, null);
//     } else {
//       cb(null, data);
//     }
//   });
// }

// module.exports = sendMail;