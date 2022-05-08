const form = document.querySelector('form');
const  button = document.getElementById('button');
const  fname = document.getElementById('fname');
const  lname = document.getElementById('lname');
const  email = document.getElementById('email');
const  password = document.getElementById('password');
const  error1 = document.getElementById('icon-error1');
const  error2 = document.getElementById('icon-error2');
const  error3 = document.getElementById('icon-error3');
const  error4 = document.getElementById('icon-error4');
const  input1 =  document.querySelector('.input1');
const  input2 = document.querySelector('.input2');
const  input3 =  document.querySelector('.input3')
const  input4 =document.querySelector('.input4');


form.addEventListener('click', (e)=>{
    e.preventDefault();
    if(fname.value === ''){
        fname.style.border = '2px solid red';
       error4.style.opacity = '1';
       input1.style.display = 'block'
       

    }

    if(lname.value === ''){
        lname.style.border = '2px solid red';
        error1.style.opacity = '1';
        input2.style.display = 'block'
    }

    if(email.value === '') {
        email.style.border = '2px solid red';
        error2.style.opacity = '1';
        input3.style.display = 'block';

    } else if(!validateEmail(email)){
        errMsg('email', 'email is required')
     }

    if(password.value === ''){
        password.style.border ='2px solid red';
        error3.style.opacity = '1';
        input4.style.display = 'block';
    }
})


const errMsg = (field, message)=>{
    const input5 = form[field].parentNode.querySelector('input5');
    input5.innerHTML = message;
    input5.style.display = 'block';
   }