// // document.writeln("welcome");
// // console.log(10+100);
// // alert("welcome");
// // prompt("Enter a name");
// // document.getElementById("divid").innerText="<li>Welcome</li>";
// // document.getElementById("divid").innerHTML="<li><b>Welcome</b></li>";//


// function printdata(){
//     let user=document.getElementById("uname").value;
//     let pass=document.getElementById("pwd").value;
//     alert(user + "You logged in successfully....");
//     document.getElementById("uname").value="";
//     document.getElementById("pwd").value="";
// } 


// let CheckUser=() =>{
//     let uname=document.getElementById("uname").value;
//     let p1=document.getElementById("pid1");
//     if(uname.length>6){
//         p1.innerHTML="Good";
//         p1.style.color="green";
//     }
//     else{
//         p1.innerHTML="Username must be 8 chars";
//         p1.style.color="red";
//     }
// }


// let checkpsw=()=>{
//     let psw=document.getElementById("pwd").value;
//     let p2=document.getElementById("pid2");
//     if(psw.length>5){
//         p2.innerHTML="Strong Password";
//         p2.style.color='green';
//     }
//     else{
//         p2.innerHTML="Weak Password";
//         p2.style.color="red";
//     }
// }


let todolist=()=>{
    let data=document.getElementById('todo').value;
    let arr=[];
    let d1=document.getElementById('result');
    arr.push(data);
    for(let i=0; i<=arr.length; i++)
    {
        d1.innerHTML=arr;
    }
}