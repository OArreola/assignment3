/*
Write a function named tellFortune() that:
•	Takes 4 arguments: number of children, partner's name, geographic location, job title.
•	Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
•	Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(
  childrenOption,
  partnerNameOption,
  locationOption,
  jobOption
) {
  let children, partnerName, location, job;

  switch (childrenOption) {
    case 1:
      children = "one kid";
      break;
    case 2:
      children = "two kids";
      break;
    case 3:
      children = "three kids";
      break;
    case 4:
      children = "four kids";
      break;
    case 5:
      children = "five kids";
      break;
    default:
      children = "no kids";
      break;
  }

  switch (partnerNameOption) {
    case 1:
      partnerName = "Jean Grey";
      break;
    case 2:
      partnerName = "Natasha Romanoff";
      break;
    case 3:
      partnerName = "Wanda Maximoff";
      break;
    case 4:
      partnerName = "Monica Rambeau";
      break;
    case 5:
      partnerName = "Emma Frost";
      break;
    case 6:
      partnerName = "Ororo Munroe";
      break;
    default:
      partnerName = "Jane Foster";
      break;
  }

  switch (locationOption) {
    case 1:
      location = "New York";
      break;
    case 2:
      location = "Paris";
      break;
    case 3:
      location = "Tokyo";
      break;
    case 4:
      location = "Cape Town";
      break;
    default:
      location = "Berlin";
      break;
  }

  switch (jobOption) {
    case 1:
      job = "a teacher";
      break;
    case 2:
      job = "an engineer";
      break;
    case 3:
      job = "a lawyer";
      break;
    case 4:
      job = "a janitor";
      break;
    case 5:
      job = "a police officer";
      break;
    case 6:
      job = "an airline pilot";
      break;
    case 7:
      job = "a doctor";
      break;
    default:
      job = "a truck driver";
      break;
  }

  window.document.write(
    "You will be " +
      job +
      " in " +
      location +
      " and married to " +
      partnerName +
      " with " +
      children
  );
}

for (let i = 0; i < 3; i++) {
  let childrenOption = parseInt(Math.random() * 6);
  let partnerNameOption = parseInt(Math.random() * 7);
  let locationOption = parseInt(Math.random() * 5);
  let jobOption = parseInt(Math.random() * 8);
  //console.log(childrenOption, partnerNameOption, locationOption, jobOption);
  tellFortune(childrenOption, partnerNameOption, locationOption, jobOption);
  if (i < 2) {
    window.document.write(" or<br>");
  }
}
