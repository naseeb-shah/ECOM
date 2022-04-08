document.querySelector("form").addEventListener('submit',collectuser);

if(localStorage.getItem('usercollection')==null){
     usercollection =[];
}else{
     usercollection =JSON.parse(localStorage.getItem('usercollection'))
}


function collectuser(){
    event.preventDefault();
    
    var userdata={
        email : document.querySelector('#email').value ,
        name : document.querySelector('#name').value ,
        password : document.querySelector('#pass').value ,
    }
    if(userdata.email==''||userdata.name==""||userdata.password==''){
         alert("Please fill all required input")
         return
    }
  usercollection.push(userdata)
  localStorage.setItem('usercollection',JSON.stringify(usercollection))
 alert("User created sucesfully!")
 
 window.location.href='./login.html'
}
