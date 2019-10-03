
//creating tag h1
const h1 = document.createElement ('h1');
h1.innerHTML = 'Sprit Animal Making';
document.body.appendChild (h1);

//creating input element
const inputbox = document.createElement ('input');
inputbox.setAttribute ('type', 'text');
inputbox.setAttribute ('placeholder', 'Enter your Name ');
document.body.appendChild (inputbox);

//creating button
const button = document.createElement ('button');
button.innerHTML = 'click';
document.body.appendChild (button);

//creating p tag
const p = document.createElement ('p');
document.body.appendChild (p);

//creating select
const select = document.createElement ('select');
select.setAttribute ('id', 'select-option');
document.body.appendChild (select);

//for option and values
const values = [
  {
    value: 'click',
    text: 'click the button',
  },
  {
    value: 'hover',
    text: 'mouse hover ',
  },
  {
    value: 'input',
    text: 'while text is inserting',
  },
];

for (var i = 0; i < values.length; i++) {
  const option = document.createElement ('option');
  option.setAttribute ('value', values[i].value);
  option.textContent = values[i].text;
  select.appendChild (option);
}

const spiritAnimalName = [
  'The Crying Butterfly',
  'The Furious Snail',
  'The Fullmoon Wolf',
  'The Cuddly Snake',
  'The Elegant Swan',
  'The Courageous Lion',
  'The Cunning Fox',
  'The Hardworking Honeybee',
  'The Loyal Dog',
];
//event types------on button click(changing spritnames)
button.addEventListener ('click', function () {
  if (select.value === 'click' && inputbox.value) {
    spiritAnimalNameGen ();
  }
});
//event types------onmouseover(changing spritnames)
inputbox.addEventListener ('mouseover', function () {
  if (select.value === 'hover' && inputbox.value) {
    button.hidden = true;
    spiritAnimalNameGen ();
  } else {
    button.hidden = false;
  }
});

//when texting in input field(not changing spritnames )
const randomIndex =
  spiritAnimalName[Math.floor (Math.random () * spiritAnimalName.length)];
inputbox.addEventListener ('input', function () {
  if (select.value === 'input' && inputbox.value) {
    button.hidden = true;
    p.textContent = inputbox.value + ' - ' + randomIndex;
  } else {
    button.hidden = false;
  }
});

function spiritAnimalNameGen () {
  const randomIndex =
    spiritAnimalName[Math.floor (Math.random () * spiritAnimalName.length)];
  if (!inputbox.value) {
    return (p.textContent = 'please enter your Name');
  } else {
    return (p.textContent = inputbox.value + ' - ' + randomIndex);
  }
}







