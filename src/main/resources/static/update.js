console.log('update')
fetch('http://localhost:8087/api/users', {
    method: 'UPDATE',

     body: JSON.stringify({
        name: 'Chyngyz',
        password:'ch',
        age:31,
    }),
    headers: {
        'Content-Type':'application/json; charset=UTF-8'
    },

})
    .then(response => response.json())
    .then(json => console.log(json))