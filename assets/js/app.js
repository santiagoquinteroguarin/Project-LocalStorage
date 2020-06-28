// VARIABLES
const listPendings = document.getElementById('list-pendings');


// EVENTS LISTENERS
eventListener();

function eventListener() {
    // When send the form
    document.querySelector('#form').addEventListener('submit',addPending);

    // Delete pendings
    listPendings.addEventListener('click', deletePending);

    // content loaded
    document.addEventListener('DOMContentLoaded', localStorageReady);
}

// FUNCTIONS

// ---> Add pending of form
function addPending(e) {
    e.preventDefault();
    // Read the value of text area
    const pending = document.getElementById('task').value;

    // --> Create button of delete
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-pending';
    deleteButton.innerText = 'X';

    // --> Create element y add the content to list
    const li = document.createElement('li');
    li.innerText = pending;

    // --> Add button of remove el pending
    li.appendChild(deleteButton);
    // --> Add pending to the list
    listPendings.appendChild(li);

    // --> Add to Local Storage
    addPendingLocalStorage(pending);
}

// --> Pending removed del DOM
function deletePending(e) {
    e.preventDefault();
    if(e.target.className === 'delete-pending') {
        e.target.parentElement.remove();
        alert('pending removed');
    }
}

// --> show local storage data in the list
function localStorageReady() {
    let pendings;

    pendings = getPendingsLocalStorage();
    pendings.forEach(pending => {
        // --> Create button of delete
        const deleteButton = document.createElement('a');
        deleteButton.classList = 'delete-pending';
        deleteButton.innerText = 'X';

        // --> Create element y add the content to list
        const li = document.createElement('li');
        li.innerText = pending;

        // --> Add button of remove el pending
        li.appendChild(deleteButton);
        // --> Add pending to the list
        listPendings.appendChild(li);
    });
}

// --> Add pending to Local Storage
function addPendingLocalStorage(pending) {
    let pendings;
    pendings = getPendingsLocalStorage();
    // Add new pending
    pendings.push(pending);

    // convert of string to array for local storage
    localStorage.setItem('pendings', JSON.stringify(pendings));
}

// --> check that there are elements in the local storage, return an array
function getPendingsLocalStorage() {
    let pendings;
    // check values of local storage
    if(localStorage.getItem('pendings') === null) {
        pendings = [];
    } else {
        pendings = JSON.parse(localStorage.getItem('pendings'));
    }
    return pendings;
}