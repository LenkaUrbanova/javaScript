
function selectPlan(planNumber) {
  // každý plán zvlášt
  const plan1 = document.getElementById('plan1');
  const plan2 = document.getElementById('plan2');
  const plan3 = document.getElementById('plan3');

  // odebrat 'plan--selected' class
  plan1.classList.remove('plan--selected');
  plan2.classList.remove('plan--selected');
  plan3.classList.remove('plan--selected');

  // Select the specified plan by adding the 'plan--selected' class
  if (planNumber === 1) {
    plan1.classList.add('plan--selected');
  } else if (planNumber === 2) {
    plan2.classList.add('plan--selected');
  } else if (planNumber === 3) {
    plan3.classList.add('plan--selected');
  } else {
    console.error('Invalid plan number: ' + planNumber);
  }
}

selectPlan(3) //různé výběry

