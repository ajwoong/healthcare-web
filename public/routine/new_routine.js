const saveBtn = document.querySelector('#save');
const topic = document.querySelector('#topic');
const article= document.querySelector('#article');


saveBtn.addEventListener('click', save)


function save(){
    const req={
        topic : topic.value,
        article : article.value
    }


    fetch('/routine/new', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
           location.href='/routine';
        }
        else{
            alert(res.msg);
        }
    })
}