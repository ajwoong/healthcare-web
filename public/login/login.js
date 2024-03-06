const id = document.querySelector('#username-field');
const pwd = document.querySelector('#password-field');
const loginBtn = document.querySelector('#login-form-submit');

loginBtn.addEventListener('click', login);


function login(){

    const req = {
        id : id.value,
        pwd : pwd.value,
    }

    fetch('/login', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=> {
        if(res.success){
            alert(res.msg);
            location.href='/';
        }
        else{
            alert(res.msg);
        }
    })
        
}
