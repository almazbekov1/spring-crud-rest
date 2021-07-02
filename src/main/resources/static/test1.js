// async function getAllUsers() {
//     let response = await fetch('http://localhost:8000/api/users')
//     let content = await response.json()
//         .then(users => {
//             let li = `
//             <tr>
//             <th scope="col">id</th>
//             <th scope="col">name</th>
//             <th scope="col">password</th>
//             <th scope="col">age</th>
//             <th style="color: blueviolet" scope="col">edit</th>
//             <th style="color: red" scope="col">delete</th>
//             </tr>`
//             users.forEach(u => {
//                 li += `<tr>
//                 <td>${u.id}</td>
//                 <td>${u.name}</td>
//                 <td>${u.password}</td>
//                 <td>${u.age}</td>
//                  <td><div class="d-flex"><button data-id="${u.id}" class="btn btn-outline-success" data-toggle="modal" data-target="#ui">edit</button></div></td>
//                 <td><button data-id="${u.id}" class="btn"><a href="#" id="delete-post">Delete</a></button></td>
//
//             </tr>`
//
//             });
//             document.getElementById("users_table").innerHTML = li;
//         })
// }
// getAllUsers()
//
//
// //post method:
// const admin = document.getElementById('register')
// let url = 'http://localhost:8000/api/users'
//
// admin.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let password = document.getElementById('password').value;
//     let age = document.getElementById('age').value;
//     console.log(name)
//     console.log(password)
//     console.log(age)
//     fetch(url, {
//         method: "POST",
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
//
// //Delete method:
// const table = document.querySelector('table');
//
// table.addEventListener('click', (e) => {
//     e.preventDefault()
//     let deleteButton = e.target.id === 'delete-post';
//     let userId = e.target.parentElement.dataset.id;
//     if (deleteButton) {
//         fetch(`${url}/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(res => res.text())
//             .then(() => location.reload())
//     }
// });

//Put method:
// const tableEdit = document.querySelector('table');
//
// tableEdit.addEventListener('click', (e) => {
//     e.preventDefault()
//     let deleteButton = e.target.id === 'update-post';
//     let userId = e.target.parentElement.dataset.id;
//     let userName = e.target.parentElement.dataset.name;
//     let userPassword = e.target.parentElement.dataset.password;
//     let userAge = e.target.parentElement.dataset.age;
//     // if (deleteButton) {
//     //     fetch(`${url}/${userId}`, {
//     //         method: 'DELETE',
//     //     })
//     //         .then(res => res.text())
//     //         .then(() => location.reload())
//     // }
//     let html = `
//        <div class="modal fade" id="${userId}" tabindex="-1"
// <!--       aria-labelledby="#addUserLabel"-->
//         aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="addUserLabel">Form</h5>
//                 <button class="btn close" data-dismiss="modal" aria-label="close"></button>
//             </div>
//             <div class="modal-body">
//                 <form id="registers" method="post" >
//                     <div class="form-group" align="center">
//                         <label for="name">Name</label>
//                         <br>
//                         <input type="text" class="control-input col-sm-10" id="name" placeholder="Name">
//                     </div>
//                     <div class="form-group" align="center">
//                         <label for="password">Password</label>
//                         <br>
//                         <input type="text" class="control-input col-sm-10" id="password" placeholder="Password">
//                     </div>
//                     <div class="form-group" align="center">
//                         <label for="age">Age</label>
//                         <br>
//
//                         <input type="text" class="control-input col-sm-10"id="age" placeholder="age">
//                     </div>
//                     <div class="form-group" align="center">
//                     </div>
// <!--                    <a href="#" class="card-link">Edit</a>-->
// <!--                    <a href="#" class="card-link">Delete</a>-->
// <!--                    <div class="form-group" align="center">-->
// <!--                        <input type="submit" value="add User">-->
// <!--                    </div>-->
//                     <div class="modal-footer">
//                         <button class="btn btn-secondary" data-dismiss="modal">Close</button>
//                         <button class="btn btn-outline-success" type="submit">Save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     <!--Modal-->
// `;
//
//
// document.getElementById('editModal').innerHTML = "html";
//
//
// let test = `<div class="modal-dialog">
//              <div class="modal-content">
//                  <div class="modal-header">
//                      <h5 class="modal-title" id="addUserLabelEdits">Form</h5>
//                      <button class="btn close" data-dismiss="modal" aria-label="close"></button>
//                  </div>
//                  <div class="modal-body">
//                      <form id="registerEdit" method="put" >
//                          <div class="form-group" align="center">
//                              <label for="name">Name</label>
//                              <br>
//                              <input type="text" class="control-input col-sm-10" id="nameEdit" placeholder="Name">
//                          </div>
//                          <div class="form-group" align="center">
//                              <label for="password">Password</label>
//                              <br>
//                              <input type="text" class="control-input col-sm-10" id="passwordEdit" placeholder="Password">
//                          </div>
//                          <div class="form-group" align="center">
//                              <label for="age">Age</label>
//                              <br>
//
//                              <input type="text" class="control-input col-sm-10"id="ageEdit" placeholder="age">
//                          </div>
//                          <div class="form-group" align="center">
//                          </div>
//                          <!--                    <a href="#" class="card-link">Edit</a>-->
//                          <!--                    <a href="#" class="card-link">Delete</a>-->
//                          <!--                    <div class="form-group" align="center">-->
//                          <!--                        <input type="submit" value="add User">-->
//                          <!--                    </div>-->
//                          <div class="modal-footer">
//                              <button class="btn btn-secondary" data-dismiss="modal">Close</button>
//                              <button class="btn btn-outline-success" type="submit">Save</button>
//                          </div>
//                      </form>
//                  </div>
//              </div>
//          </div>
// `
// document.getElementById('editModal').innerHTML = "test";

//});



















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
//         document.location.href = 'index.html'
//
//     }
// });













//     if (updateButton){
// const parent= e.target.parentElement;
//     let user = parent.querySelector('nameValue').textContent;
//     userValue.value=user;
//     }

// btnSubmit.addEventListener('click', (ex) => ){
//         ex.preventDefault()
// fetch(`${url}/${id}`,{
//     method: 'PATCH',
//     headers:{
//         'content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         user: userValue.value,
//         body: bodyValue.value,
//     })
//         .then(res=>res.json())
//         .then(()=>location.reload())
//     })
//     }




// const table = document.querySelector('table');
//
// table.addEventListener('click', (e)=> {
//     e.preventDefault()
//     let updateButton = e.target.id === 'update-post';
//     let userId = e.target.parentElement.dataset.id;
//     if (updateButton) {
//         fetch(`${url}/${userId}`, {
//             method: 'PUT',
//         })
//             .then(response => response.text())
//             .then(() => location.reload())
//     }
//
// })


