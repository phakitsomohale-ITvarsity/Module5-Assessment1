    function verifyUser()
    {
    var username= document.getElementById("usernameInput").value;
    var password= document.getElementById("passwordInput").value;
    if(username == "Fresh" && password == "Mohale")
     
    {
               
         alert("Login Successful...");
         return false; 

         
    } 
    else 
    { 
            alert("Login Failed. Username or Password Incorrect");
    }
           
    }