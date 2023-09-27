//  The getElementById Method--------------------------------------

// let data = document.getElementById('demo')
// console.log(data.innerText);
// data.innerText = 'Gopal pandey'

//  The getElementsByTagName Method----------------------------------------

// let data = document.getElementsByTagName('h1')
// console.log(data[0].innerText);
// data[0].innerText = 'Gopal'

//  The getElementsByClassName Method----------------------------------------

// let data = document.getElementsByClassName('demo')
// console.log(data[0].innerText);
// data[0].innerText = 'Gopal'

//  The querySelector Method----------------------------------------


// for class

// let data = document.querySelector('.demo')
// console.log(data.innerText);
// data.innerText = 'Gopal'

// for id

// let data = document.querySelector('#demo')
// console.log(data.innerText);
// data.innerText = 'Gopal'

//  The querySelectorAll Method----------------------------------------


// for class

// let data = document.querySelectorAll('.demo')
// console.log(data);
// for (let x of data) {
//     console.log(x);
//     x.innerHTML = 'lal kila'
// }


// The Attribute Method-------------------------------------------------------

// 

// For image change 

// let data = document.querySelector("img").src = 'https://images.pexels.com/photos/3881106/pexels-photo-3881106.jpeg?auto=compress&cs=tinysrgb&w=600'

// For style change

// let heading= document.querySelector('h1').style='font-size:20px;background-color:red;'

// click button to change pic

// function myfunc(){
//     document.querySelector('h1').innerHTML='new pic'
//     document.querySelector("img").style="width:400px;"
//     document.querySelector("img").src = 'https://images.pexels.com/photos/3881106/pexels-photo-3881106.jpeg?auto=compress&cs=tinysrgb&w=600'
// }