document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount && pin){
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount
        document.getElementById('mainBalance').innerText = sum;

    }
    else{
       alert('Enter Valid Pin')
    }
}
else{
    alert('Enter Amount')
        
}
})