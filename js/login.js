document.getElementById("login-button").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('acount-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)
    if(accountNumber.length === 11){
        console.log("yes")
        if(convertedPin === 1234){
            window.location.href = "home.html"
        }
        else{
            alert('Invalid')
        }
    }
    else{
        alert("invalid")
    }
    
})