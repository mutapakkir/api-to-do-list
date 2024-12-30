//const response = require('express')

//fetch('http://localhost:3000/api/student',{
  // method :'POST',
   // headers :{
   //     'Content-Type':'application/json'
    //},
    //body :JSON.stringify({
      //  name : 'ibda',
        //email : 'ibda@gmail.com',
        //phone :'089797'
//})
//})
//.then (response => response.json())
//.then (data => console.log(data))
//.chatch(eror => console.log(eror))
const response = require('express')

fetch('http://localhost:3000/api/student', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "123"
    },
    body: JSON.stringify({
        name: 'ibda',
        email: 'ibda@gmail.com',
        phone: '088777715'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))