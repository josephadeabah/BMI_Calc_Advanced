

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


document.write(calculateBMI(1534,6))


