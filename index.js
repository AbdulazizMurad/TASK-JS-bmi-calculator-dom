function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let cmToM = height / 100;
  let bmi = weight / cmToM ** 2;
  alert(
    "NOTE: This Website is a calculator of your bmi and whether or not you are a healthy person could be not accurate!!!"
  );
  alert(
    "The general bmi reference is as follows: 1) Below 18.5 Underweight // 2) 18.5 - 24.9 Healthy-Weight // 3) 25.0 – 29.9 Overweight // 4) 30.0+ Obesity"
  );

  if (age >= 19 && age <= 24 && bmi >= 19 && bmi <= 24) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 25 && age <= 34 && bmi >= 20 && bmi <= 25) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 35 && age <= 44 && bmi >= 21 && bmi <= 26) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 45 && age <= 54 && bmi >= 22 && bmi <= 27) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 55 && age <= 64 && bmi >= 23 && bmi <= 28) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 65 && bmi >= 24 && bmi <= 29) {
    alert(`"your BMI is:" ${bmi} and you are healthy`);
  } else if (age >= 19 && bmi > 29) {
    alert(`"your BMI is: ${bmi} you have obesity"`); //applied on all  ages from 19+ according to the table reference.
  } else if (age < 19) {
    alert(
      ` "your BMI is: ${bmi} but this calculator has reference of 19+ years only to specify it's healthy or not"`
    );
  } else {
    alert(
      `"your BMI is:" ${bmi} and you are not healthy, please check a Nutritionist`
    );
  }
}

//Task 2 without the challenge code:
//if (bmi <= 18.5) {
//alert("You are Underweight");
//} else if (bmi > 18.5 && bmi <= 24.9) {
// alert("Healthy weight");
//} else if (bmi > 25.0 && bmi <= 29.9) {
// alert("Overweight", "not healthy");
//} else if (bmi >= 30.0) {
// alert("Obesity");
//}
