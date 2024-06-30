const mouse = document.querySelector('.mouse');
const blob = document.querySelector('.mouseblob');
const about = document.getElementById('about');
const date = document.getElementById('date');
const time = document.getElementById('time');

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

function Zero(value) {
  return value < 10 ? '0' + value : value;
}

setInterval(() => {
  let now = new Date();
  let year = now.getFullYear();
  let month = Zero(now.getMonth() + 1);
  let zdate = Zero(now.getDate());
  let hours = Zero(now.getHours());
  let minutes = Zero(now.getMinutes());
  let seconds = Zero(now.getSeconds());
  let datestr = `${year} / ${month} / ${zdate}`;
  let timestr = `${hours} : ${minutes} : ${seconds}`;

  if (date) {
    date.textContent = datestr;
  }
  if (time) {
    time.textContent = timestr;
  }
}, 1000);

let isMousedown = false;
let isMouseInViewport = true;

document.addEventListener('mousemove', function(e) {
  if (!isMouseInViewport) return;

  const mousex = e.clientX;
  const mousey = e.clientY;
  const offsetx = mouse.offsetWidth / 2;
  const offsety = mouse.offsetHeight / 2;
  const boffsetx = blob.offsetWidth / 2;
  const boffsety = blob.offsetHeight / 2;

  mouse.style.left = `${mousex - offsetx}px`;
  mouse.style.top = `${mousey - offsety}px`;

  const x = mousex - boffsetx;
  const y = mousey - boffsety;
  const interacting = isMousedown;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
    filter: `blur(${interacting ? '50px' : '25px'})`
  };

  blob.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  });

  if (isMousedown) {
    mouse.classList.add('textsel');
  } else {
    mouse.classList.remove('textsel');
  }
});

document.addEventListener('mousedown', function() {
  mouse.classList.add('larger');
  isMousedown = true;
});

document.addEventListener('mouseup', function() {
  isMousedown = false;
  mouse.classList.remove('larger');
  mouse.classList.remove('textsel');
});

document.addEventListener('mouseenter', function() {
  isMouseInViewport = true;
  mouse.style.opacity = 1;
  blob.style.opacity = 1;
});

document.addEventListener('mouseleave', function() {
  isMouseInViewport = false;
  mouse.style.opacity = 0;
  blob.style.opacity = 0;
});


//bacgkround 😭

let angA = 0;  let angB = 0;  let angC = 0;  let angD = 0; 

function animateCir() {

  // Circle A
  const centerX_A = window.innerWidth * (30 / 100);
  const centerY_A = window.innerHeight * (40 / 100);
  

  // Circle B
  const centerX_B = window.innerWidth * (50 / 100);
  const centerY_B = window.innerHeight * (50 / 100);

  // Circle C
  const centerX_C = window.innerWidth * (70 / 100);
  const centerY_C = window.innerHeight * (60 / 100);


  const centerX_D = window.innerWidth * (100 / 100);
  const centerY_D = window.innerHeight * (50 / 100);

  let radA = 80; // Adjusted smaller radius for Circle A
  let radAp = 75; // Adjusted radial distance for Circle A (1/4 shorter)
  let cirAx = centerX_A + radAp * Math.cos(angA) - radA / 2;
  let cirAy = centerY_A + radAp * Math.sin(angA) - radA / 2;
  angA -= 0.01; // Adjust angle increment for Circle A

  document.documentElement.style.setProperty('--cirAx', `${cirAx}px`);
  document.documentElement.style.setProperty('--cirAy', `${cirAy}px`);
  document.documentElement.style.setProperty('--radA', `${radA}px`);

  let radB = 90; // Adjusted smaller radius for Circle B
  let radBp = 112.5; // Adjusted radial distance for Circle B (1/4 shorter)
  let cirBx = centerX_B + radBp * Math.cos(angB) - radB / 2;
  let cirBy = centerY_B + radBp * Math.sin(angB) - radB / 2;
  angB += 0.007; // Adjust angle increment for Circle B

  document.documentElement.style.setProperty('--cirBx', `${cirBx}px`);
  document.documentElement.style.setProperty('--cirBy', `${cirBy}px`);
  document.documentElement.style.setProperty('--radB', `${radB}px`);

  let radC = 100; // Adjusted smaller radius for Circle C
  let radCp = 150; // Adjusted radial distance for Circle C (1/4 shorter)
  let cirCx = centerX_C + radCp * Math.cos(angC) - radC / 2;
  let cirCy = centerY_C + radCp * Math.sin(angC) - radC / 2;
  angC += 0.012; // Adjust angle increment for Circle C

  document.documentElement.style.setProperty('--cirCx', `${cirCx}px`);
  document.documentElement.style.setProperty('--cirCy', `${cirCy}px`);
  document.documentElement.style.setProperty('--radC', `${radC}px`);

  let radD = 75; // Adjusted smaller radius for Circle C
  let radDp = 100; // Adjusted radial distance for Circle C (1/4 shorter)
  let cirDx = centerX_D + radDp * Math.cos(angD) - radD / 2;
  let cirDy = centerY_D + radDp * Math.sin(angD) - radD / 2;
  angD -= 0.0075; // Adjust angle increment for Circle C

  document.documentElement.style.setProperty('--cirDx', `${cirDx}px`);
  document.documentElement.style.setProperty('--cirDy', `${cirDy}px`);
  document.documentElement.style.setProperty('--radD', `${radD}px`);
  setTimeout(() => {
    requestAnimationFrame(animateCir);
  }, 10); // Adjust frame rate as needed
}

animateCir();

document.documentElement.style.setProperty('--filter', "url('data:image/png;base64,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')")
