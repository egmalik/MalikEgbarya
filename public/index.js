document.querySelector('h1').style.background = 'yellow';

function getUsers(){
    console.log('get-users');
    fetch('/get-users')
    .then(r=>r.json())
    .then(users=>{
        console.log('then')
        renderUsers(users);
    }) 
    console.log('afterfetch');
}



function renderUsers(users){
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        html += `<p> Name: ${user.name}</p>`

    })

    root.innerHTML = html ;
}