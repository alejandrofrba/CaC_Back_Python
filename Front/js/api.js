
document.addEventListener('DOMContentLoaded', function() {
    loadUsers();

    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const Comentarios = document.getElementById('Comentarios').value;
        const fecLleg = document.getElementById('fecLleg').value;
        
        const fecSal = document.getElementById('fecSal').value;
        const TipHab = document.getElementById('TipHab').value;

        const turno = document.getElementById('turno').value;

/* 
        const op = document.getElementById('op').value;
        const coch = document.getElementById('coch').value;

        const huesp = document.getElementById('huesp').value;
        const menores = document.getElementById('menores').value;
 */
        createUser(nombre, fecLleg, fecSal, TipHab, turno, email, Comentarios);
    });
});

async function loadUsers() {
    const response = await fetch('http://localhost:5001/users');
    const users = await response.json();
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `ID: ${user.id} // nombre: ${user.nombre} //  Email: ${user.email}  //  Comentarios: ${user.Comentarios}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editUser(user.id);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(user.id);

        userItem.appendChild(editButton);
        userItem.appendChild(deleteButton);
        usersList.appendChild(userItem);
    });
}
/* 
    async function createUser(nombre, email, fecLleg, fecSal, TipHab, Comentarios, turno, op, coch, huesp, menores) {
 */
    async function createUser(nombre, fecLleg, fecSal, TipHab, turno, email, Comentarios) {
        const response = await fetch('http://localhost:5001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, fecLleg, fecSal, TipHab, turno, email, Comentarios })
    });

    if (response.ok) {
        loadUsers();
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('Comentarios').value = '';
    }
}

async function editUser(id) {
    const nombre = prompt('Enter new name:');
    const email = prompt('Enter new email:');
    if (nombre && email) {
        await fetch(`http://localhost:5001/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email })
        });
        loadUsers();
    }
}

async function deleteUser(id) {
    await fetch(`http://localhost:5001/users/${id}`, {
        method: 'DELETE'
    });
    loadUsers();
}
