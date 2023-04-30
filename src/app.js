/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-03-23
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const doc = {
    tbody: document.querySelector('#tbody')
};

const state = { // host neveket itt tároljuk
    host: 'http://localhost:8000/',
    todos: []
};

getTodos();
function getTodos() { // url összeáállítása
    let url = state.host + 'todos'  //ez a végpont: todos
    fetch(url)
    .then(response => response.json())    //akkor kell valamit tenni
    .then(result => {
        console.log(result);
        state.todos = result;
        render();
    });
}

function render() { //weblapra rendereli, az összes tudo-t be kell járni forEach-el(tennivalókat)
    let rows = '';
    state.todos.forEach( (todo) => {
        rows += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>${todo.ready}</td>
            </tr>
        `;
        console.log(todo.name); // kiíródnak a nevek
    });
    doc.tbody.innerHTML = rows;
}