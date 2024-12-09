document.getElementById('signup-button').addEventListener('click',function(event){
    event.preventDefault();//prevents instant submission
    const email = document.getElementById('s-email').value.trim();
    const username = document.getElementById('s-username').value.trim();
    const password = document.getElementById('s-password').value.trim();
    const repassword = document.getElementById('s-repassword').value.trim();
    const lenpass = password.length;

    if(!email || !username || !password || !repassword){
        alert("!! All fields are required");
        return;
    }
    else if(password !== repassword ){
        alert("Make sure that you enter the same value in password  and Re-password");
    }
    else if (lenpass <=4 ){
        alert("Password must be of atleast 5 characters.")
    }
    else {
        alert("Youve succesfully registered your account");
    }

});
