// let demo = () =>{
//     let user = document.getElementById('unmae').value;
//     alert("Hi " + user);

//     let c1 = document.getElementsByClassName('d1');
//     c1[0].style.color="red";
//     c1[1].style.color="red";
    
//     let c1 = document.getElementsByTagName('p');
//     let result = c1.length;
//     alert("The count of paragraph : " + result);      

//     let l1 = document.createElement('label');
//     let txt = document.createTextNode("\nEnter a user name");
//     l1.appendChild(txt);
//     let inp = document.createElement('input');
//     inp.setAttribute('type', "text");
//     inp.setAttribute('id', "uname");
//     inp.setAttribute('value', "");
//     inp.setAttribute('placeholdet', "Enter a name")
//     let button = document.createElement('button');
//     button.innerText = "Submit"; 
//     l1.appendChild(inp);
//     document.body.appendChild(l1);
//     document.body.appendChild(button);
// }



    //***Local  Storag***
    // localStorage.setItem('username', 'Narmatha');
    // var username = localStorage.getItem('username');
    // console.log(username);

//**JSON***
let obj = {
    "stuname":"Narmatha",
    "dept":"B.Tech AI&DS",
    "age":21
}
console.log(obj.stuname);
console.log(obj.dept);
console.log(obj.age);


