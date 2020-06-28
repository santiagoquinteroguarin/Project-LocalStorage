// VARIABLES
const listPendings = document.getElementById('list-pendings');


// EVENTS LISTENERS
eventListener();

function eventListener() {
    // When send the form
    document.querySelector('#form').addEventListener('submit',addPending);

    // Delete pendings
    listPendings.addEventListener('click', deletePending);
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
}

// --> Pending removed
function deletePending(e) {
    e.preventDefault();
    if(e.target.className === 'delete-pending') {
        e.target.parentElement.remove();
        alert('pending removed');
    }
}