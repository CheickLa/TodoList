const ul = document.querySelector("#todos");
const input = document.querySelector('#input');
body = document.querySelector('.container');

// Ajout de tache
function addTask(){
    if (input.value === ''){
       alert('Saisissez une tâche');
    }
    else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);    
    }
    input.value = '';
    EnregistreData();
}

// Gestion du click pour la suppression et la tache réalisée 
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        EnregistreData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        EnregistreData();
    }
}, false);

// Enregistre les données dans le navigateur
function EnregistreData(){
    localStorage.setItem("data", ul.innerHTML);
} 

// Charge les données dans le navigateur
function ChargeData(){
    ul.innerHTML = localStorage.getItem("data");
}
ChargeData();





