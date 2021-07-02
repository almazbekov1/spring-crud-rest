async function getAllUsers() {
    let response = await fetch('http://localhost:8000/api/users')
    let content = await response.json()
        .then(users => {
            let li = `
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">password</th>
            <th scope="col">age</th>
            <th style="color: blueviolet" scope="col">edit</th>
            <th style="color: red" scope="col">delete</th>
            </tr>`
            users.forEach(u => {
                li += `<tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.password}</td>
                <td>${u.age}</td>
                <td><button class="btn btn-outline-success" data-toggle="modal" data-target="#UpdateUser">Update</button></td>
                <td><button data-id="${u.id}" class="btn"><a href="#" id="delete-post">Delete</a></button></td>

            </tr>`

            });
            document.getElementById("users_table").innerHTML = li;
        })
}
getAllUsers()


//post method:
const admin = document.getElementById('register')
let url = 'http://localhost:8000/api/users'

admin.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    console.log(name)
    console.log(password)
    console.log(age)
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            password: password,
            age: age,
        })
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
    setTimeout(test,300);
    function test() {
        document.location.href = 'index1.html'

    }
});

//Delete method:
const table = document.querySelector('table');

table.addEventListener('click', (e) => {
    e.preventDefault()
    let deleteButton = e.target.id === 'delete-post';
    let userId = e.target.parentElement.dataset.id;
    if (deleteButton) {
        fetch(`${url}/${userId}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(() => location.reload())
    }
});


//Update method:
// const adminEdit = document.getElementById('registerEdit')
// let url = 'http://localhost:8000/api/users'
//
// adminEdit.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let password = document.getElementById('password').value;
//     let age = document.getElementById('age').value;
//     console.log(name)
//     console.log(password)
//     console.log(age)
//     fetch(url, {
//         method: "PUT",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             password: password,
//             age: age,
//         })
//     }).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log(data)
//     })
//     setTimeout(test,300);
//     function test() {
//         document.location.href = 'index1.html'
//
//     }
// });