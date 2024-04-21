const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //by default,height and weight values will get saved to db 
  //on clicking calculate so avoid that  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) 
  {
    results.innerHTML = "Please give a valid height";
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) 
  {
    results.innerHTML = "Please give a valid weight";
  } 
  else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span><br>`;
    if(bmi<18.6)
    {
      results.innerHTML = `<span>${bmi}<br>You are Underweight</span>`;
    }
    else if(bmi>=18.6 && bmi<=24.9)
    {
      results.innerHTML = `<span>${bmi}<br>You have a Healthy BMI</span>`;
    }
    if(bmi>24.9)
    {
      results.innerHTML = `<span>${bmi}<br>You are Overweight</span>`;
    }
  }

});

