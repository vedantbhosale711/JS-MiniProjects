const form = document.querySelector('#form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    const result = document.querySelector('#result');
    let bmi = weight/((height/100)**2);

    if(bmi<18.6){
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}
        <br>You are Underweight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}
        <br>You are Normal`;
    }
    else{
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}
        <br>You are Overweight`;
    }
})