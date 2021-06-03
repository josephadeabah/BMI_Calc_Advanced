


let first = document.getElementById("btn");
first.addEventListener('click', () => {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let results = document.getElementById("results");
    message = "";
    let BMI = Math.round(weight / Math.pow(height, 2));

    if (BMI < 18.5)
    {
       message = "You are Underweight"
    }
    else if (BMI >= 18.5 && BMI < 24.9)
    {
      message = "You have a Normal Weight"
    }
    else if (BMI >= 24.9)
    {
      message = "You Are Over Weight" 
    }
    else
    {
      BMIstore= "Error. Range cannot be determined"
    }
  
    results.innerHTML = "Your BMI is " + BMI +" "+ message;
 
}, false);