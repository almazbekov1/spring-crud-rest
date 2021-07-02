console.log('DELETE')
fetch('http://localhost:8087/api/users',{
    method: 'DELETE',

    headers: {
        'Content-Type':'application/json; charset=UTF-8'
    },

    body: JSON.stringify({
        name: 'Chyngyz',
        password:'ch',
        age:31,
        role: 1
    })
})