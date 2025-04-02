let checklogin = () => {
    let user = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;

    if (user === pass) {
        alert("Hi " + user + ", login successfully...");
    } else {
        alert("Invalid credentials");
    }
};
window.onload = () => {
    document.getElementById('btn').addEventListener('click', checklogin);
};


//let a=10;
//let b=5;
//console.log(a+=b);


// let a=10;
// console.log(a++);
// console.log(a);

let age=18;
let result=(age>=18)?"Eligible to Vote": "Not Eligible to Vote";
console.log(result);

// let n=10;
// for(let i=1; i<=n; i++)
// {
//     if(i%2==0)
//     {
//        console.log(i);
//     }  
// }

// let n=10;
//  for(let i=1; n>=i; n--)
//  {
//      console.log(n);
//  }

// let n=10;
// let i=1;
// while(i<=n){
//     i++;
//     console.log(i);
// }

// let n=10;
// i=0;
// do{
//     i++;
//     console.log(i);
// }while(i<=n);
