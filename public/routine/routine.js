const req = {};

fetch('/routine', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
})
    .then((res) => res.json())
    .then((res) => {
        const topic_lists = res.topic;
        const article_lists = res.article;
        for (let i = 0; i < topic_lists.length; i++) {

            const form = document.createElement('form');
            form.id = `topic_${i}`;
            //form.setAttribute('data-index', i);
            form.style.border = '4px solid';
            
            const header = document.createElement('h3');
            header.innerHTML = `${topic_lists[i]}`;
            
            const paragraph = document.createElement('p');
            const new_article = article_lists[i].replace(/\n/g, '<br>');
            paragraph.innerHTML = new_article;
            
            const deleteButton = document.createElement('input');
            deleteButton.type = 'button';
            deleteButton.value = 'Delete';
            deleteButton.onclick = function() {
                Delete(i, res);
            };

            const updateButton = document.createElement('input');
            updateButton.type='button';
            updateButton.value= 'Update';
            updateButton.onclick= function() {
                Update(i, res);
            }


            const spaceSpan = document.createElement('span');
            spaceSpan.innerHTML = '&nbsp;'; 

            form.appendChild(header);
            form.appendChild(paragraph);
            form.appendChild(deleteButton);
            form.appendChild(spaceSpan);
            form.appendChild(updateButton);

            
            document.getElementById('topic_list').appendChild(form);

            document.getElementById('topic_list').appendChild(document.createElement('br'));

            // form.addEventListener('click', function(event) {
            //     const dataIndex = event.currentTarget.getAttribute('data-index');
            //     window.location.href = `/routine/${dataIndex}`; // 예시 링크로 수정
            // });
        }
    });

function Delete(index, res) {

    res.topic.splice(index,1);
    res.article.splice(index, 1);

    const req={
        topic: res.topic,
        article: res.article
    }

    fetch('/routine/delete', {
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

function Update(index, res){

    const update_form = document.getElementById(`topic_${index}`);
    update_form.innerHTML='';

    const update_topic = document.createElement('textarea');
    update_topic.setAttribute('id', `update_topic_${index}`)
    update_topic.style = 'margin-top: 16px;'

    const update_article = document.createElement('textarea');
    update_article.setAttribute('id', `update_article_${index}`)
    update_article.style=' margin-top:10px; width: 450px; height: 180px;'

    const update_saveBtn = document.createElement('input');
    update_saveBtn.type = 'button';
    update_saveBtn.value = 'Save';

    const update_cancelBtn = document.createElement('input');
    update_cancelBtn.type = 'button';
    update_cancelBtn.value = 'Cancel';

    const spaceSpan = document.createElement('span');
    spaceSpan.innerHTML = '&nbsp;'; 


    update_topic.innerHTML = res.topic[index];
    update_article.innerHTML = res.article[index];
    update_form.append(update_topic);
    update_form.append(document.createElement('br'));
    update_form.append(update_article);
    update_form.append(document.createElement('br'));
    update_form.append(update_saveBtn);
    update_form.append(spaceSpan);
    update_form.append(update_cancelBtn);
    

    update_saveBtn.onclick = function(){

        update_topic.innerHTML = document.querySelector(`#update_topic_${index}`).value;
        update_article.innerHTML = document.querySelector(`#update_article_${index}`).value;
        
        const req={
            topic : update_topic.innerHTML,
            article : update_article.innerHTML,
            index : index,
        }


        fetch('/routine/save', {
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


    update_cancelBtn.onclick = function() {

        update_form.innerHTML='';
        
        const header = document.createElement('h3');
        header.innerHTML = `${res.topic[index]}`;
        
        const paragraph = document.createElement('p');
        const new_article = res.article[index].replace(/\n/g, '<br>');
        paragraph.innerHTML = new_article;
        
        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.onclick = function() {
            Delete(index, res);
        };

        const updateButton = document.createElement('input');
        updateButton.type='button';
        updateButton.value= 'Update';
        updateButton.onclick= function() {
            Update(index, res);
        }


        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '&nbsp;'; 

        update_form.appendChild(header);
        update_form.appendChild(paragraph);
        update_form.appendChild(deleteButton);
        update_form.appendChild(spaceSpan);
        update_form.appendChild(updateButton);

    }


}


