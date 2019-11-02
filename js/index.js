// Your code goes here

const originalImgSrcs = Array.from(document.querySelectorAll('img')).map(
  element => element.src
);
console.log(originalImgSrcs);

const spookyImgSrcs = [
  'https://images.unsplash.com/photo-1509558567730-6c838437b06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1492515114975-b062d1a270ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

const horrorWords = ['ZOMBIE BUS', 'SCARY', 'GUTS', 'DEATH', 'GHOUL'];

const halloweenHeadings = [
  'UNWELCOME TO ZOMBIE BUS',
  "LET'S DIE!",
  'TORTURE AWAITS',
  'PICK YOUR POISON',
  'BURN IN THE SUN',
  'EXCRUCIATING EXCURSION',
  'ISLAND IMPALEMENT'
];

const evilLaugh = 'grimly ghosts come out to socialize';

const zombieIpsum =
  'Reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.';

//Change images on click
const imgs = document.querySelectorAll('img');
imgs.forEach((element, i) => {
  element.addEventListener('click', () => {
    element.src = spookyImgSrcs[i];
  });

  // Revert images on double click
  element.addEventListener('dblclick', () => {
    element.src = originalImgSrcs[i];
  });
});

//Change background and text colors on scroll
const body = document.querySelectorAll(
  '.main-navigation, .nav-container a, body, footer p'
);
body.forEach(element => {
  window.addEventListener('scroll', () => {
    element.style.color = 'orange';
    element.style.backgroundColor = 'black';
  });
});

//Change nav link content on hover
const navCont = document.querySelectorAll('.logo-heading, .nav-link');
navCont.forEach((element, i) => {
  const originalText = element.textContent;
  const originalColor = element.style.color;
  element.addEventListener('mouseenter', () => {
    element.textContent = horrorWords[i];
    element.style.color = 'red';
  });

  element.addEventListener('mouseleave', () => {
    element.textContent = originalText;
    element.style.color = originalColor;
  });
});

//Change section headings on re-size
const headings = document.querySelectorAll('h2, h3, h4');
headings.forEach((element, i) => {
  window.addEventListener('resize', () => {
    element.textContent = halloweenHeadings[i];
    element.style.color = 'red';
  });
});

//Change all <p>'s to evilLaugh on keydown, zombieIpsum on keyup
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(element => {
  window.addEventListener('keydown', () => {
    element.textContent = evilLaugh;
  });

  window.addEventListener('keyup', () => {
    element.textContent = zombieIpsum;
  });
});

// Change div.destination background and text color on click
const destinations = document.querySelectorAll('.destination');
destinations.forEach(element => {
  element.addEventListener('click', () => {
    element.style.backgroundColor = 'red';
    element.style.color = 'black';
  });
});

// Change .btn background and text color on click, without propagating
const buttons = document.querySelectorAll('.btn');
buttons.forEach(element => {
  element.addEventListener('click', event => {
    event.stopPropagation();
    element.style.backgroundColor = 'black';
    element.style.color = 'orange';
  });
});

// Prevent nav links from refreshing page
const stopNavLinks = document.querySelectorAll('nav a');
stopNavLinks.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
  });
});
