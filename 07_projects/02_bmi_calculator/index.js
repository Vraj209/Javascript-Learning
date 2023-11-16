const form = document.querySelector("form");
// this use case will give emepty string
// const height = parseInt(document.querySelector("#height").value)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || isNaN(height)) {
    results.innerHTML = "Please enter valid height";
  } else if (weight === "" || isNaN(weight)) {
    results.innerHTML = "Please enter valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI ${bmi}</span>`;
  }
});
