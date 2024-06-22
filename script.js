const mouse = document.querySelector('.mouse');
const blob = document.querySelector('.mouseblob');
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
  blob.style.opacity= 1;
});

document.addEventListener('mouseleave', function() {
  isMouseInViewport = false;
  mouse.style.opacity = 0;
  blob.style.opacity = 0;
});
