function func() {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("Weight").value);
  var height_m = height / 100;
  let bmi = weight / (height_m * height_m);
  bmi = bmi.toFixed(3);
  document.getElementById("result").innerHTML = bmi;
  if (bmi < 19)
    document.getElementById("msg").innerHTML = "You're Underweight !";
  else if (bmi > 19 && bmi < 24)
    document.getElementById("msg").innerHTML = "You're BMI is normal !";
  else if (bmi > 25 && bmi < 29)
    document.getElementById("msg").innerHTML = "You're BMI is Overweight !";
  else if (bmi > 30 && bmi < 34)
    document.getElementById("msg").innerHTML = "You're BMI is Obsese(I) !";
  else if (bmi > 35 && bmi < 39)
    document.getElementById("msg").innerHTML = "You're BMI is Obsese(II) !";
  else console.log("You're BMI is Obsese(III) !");
}
