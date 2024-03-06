const id = document.querySelector('#username-field');
const pwd = document.querySelector('#password-field');
const confirmpwd = document.querySelector('#confirm-password-field')
const signupBtn = document.querySelector('#signup-form-submit')

signupBtn.addEventListener('click', register);

function register(){

    if(!id.value){
        return alert('아이디를 입력해주십시오.');
    }

    if(pwd.value !== confirmpwd.value) {
        return alert('비밀번호가 일치하지 않습니다.');
    }

    const req = {
        id: id.value,
        pwd: pwd. value
    }

    fetch('/register', {
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
            location.href='/login';
        }
        else{
            alert(res.msg);
        }
    })
    


}