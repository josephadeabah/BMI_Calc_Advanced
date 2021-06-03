

  calculateBMI = (weight, height) => {
  let BMIstore

  let BMI = Math.round(weight / (height) ** 2)
  
  if (BMI < 18.5)
  {
     BMIstore = "Your BMI is " + BMI +  ", so you are underweight"
  }
  else if (BMI >= 18.5 && BMI < 24.9)
  {
    BMIstore = "Your BMI is " + BMI +", so you have a normal weight" 
  }
  else if (BMI >= 24.9)
  {
    BMIstore = "Your BMI is " + BMI +", so you are overweight."  
  }
  else
  {
    BMIstore= "Error. Range cannot be determined"
  }

  return BMIstore
}


/*document.write(calculateBMI(1534,6))*/


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
  
    results.innerHTML = "Your BMI is " + BMI + message;
 
}, false);