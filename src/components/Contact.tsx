// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

// function Contact() {

//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const [nameError, setNameError] = useState<boolean>(false);
//   const [emailError, setEmailError] = useState<boolean>(false);
//   const [messageError, setMessageError] = useState<boolean>(false);

//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     setNameError(name === '');
//     setEmailError(email === '');
//     setMessageError(message === ''); 

//     /* Uncomment below if you want to enable the emailJS */

//     if (name !== '' && email !== '' && message !== '') {
//       var templateParams = {
//         name: name,
//         email: email,
//         message: message
//       };

//       console.log(templateParams);
//       emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//           console.log('FAILED...', error);
//         },
//       );
//       setName('');
//       setEmail('');
//       setMessage('');
//     }
//   };

//   return (
//     <div id="contact">

                
                
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
//           <Box
//             ref={form}
//             component="form"
//             noValidate
//             autoComplete="off"
//             className='contact-form'
//           >
          
//               <div className='form-flex'>
//                 <TextField
//                   required
//                   id="outlined-required"
//                   label="Your Name"         
//                   placeholder="What's your name?"
//                  value={name}
//                  variant="standard"
//                  onChange={(e) => {
//                   setName(e.target.value);
//                   }}
//                   error={nameError}
//                   helperText={nameError ? "Please enter your name" : ""}
//                  />
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 error={emailError}
//                 helperText={emailError ? "Please enter your email or phone number" : ""}
//               />
//             </div>
//             <TextField
//               required
//               id="outlined-multiline-static"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               error={messageError}
//               helperText={messageError ? "Please enter the message" : ""}
//             />
//             <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

//////////////////////////////////////////////////////////////////

import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === ''); 

    const service_id = 'service_vjb3ub9';
    const template_id = 'template_shuch2i';
    const api_key = 'fBd4B3Nq0Whwcp4krn';

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        to_name: 'soni',
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_vjb3ub9', template_id, templateParams, 'Bd4B3Nq0Whwcp4krn').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
           >
            <div className='form-flex'>
              <div className='field-with-placeholder'>
                <TextField
                  required
                  id="outlined-required"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  // error={nameError}
                  // helperText={nameError ? "Please enter your name" : ""}
                />
                <div className="textfield-placeholder" />
              </div>

              <div className='field-with-placeholder'>
                <TextField
                  required
                  id="outlined-required"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  // error={emailError}
                  // helperText={emailError ? "Please enter your email or phone number" : ""}
                />
                <div className="textfield-placeholder" />
              </div>
             </div>

             <div className='field-with-placeholder2'>
              <TextField
                required
                id="outlined-multiline-static"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                // error={messageError}
                // helperText={messageError ? "Please enter the message" : ""}
              />
              <div className="textfield-placeholder2 " />
             </div>

             <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
             </Button>
             </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
