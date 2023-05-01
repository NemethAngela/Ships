/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-04-30
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const doc = {
    tbody: document.querySelector('#tbody')
};

const state = { // host neveket itt tároljuk
    host: 'http://localhost:8000/',
    ships: []
};

getShips();
function getShips() { // url összeáállítása
    let url = state.host + 'ships'  //ez a végpont: ships
    fetch(url)
    .then(response => response.json())    
    .then(result => {
        console.log(result);
        state.ships = result;
        render();
    });
}

function render() { //weblapra rendereli, az összes ships-t be kell járni forEach-el(tennivalókat)
    let rows = '';
    state.ships.forEach( (ships) => {
        rows += `
            <tr>
                <td>${ships.name}</td>
                <td>${ships.length}</td>
                <td>${ships.price}</td>
                <td>${ships.person}</td>
                <td>${ships.trailer}</td>
            </tr>
        `;
        console.log(ships.name); // kiíródnak a nevek
    });
    doc.tbody.innerHTML = rows;
}