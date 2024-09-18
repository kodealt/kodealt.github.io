const content = document.getElementsByClassName('cool')[0];

content.addEventListener('wheel', function(event){
    event.preventDefault();
    content.scrollLeft += event.deltaY;
});

let feixiao = 1;

function thefelix() {
    const elem = document.getElementById('dare');
    const rect = elem.getBoundingClientRect();   
    const x = (rect.left + rect.right) / 2 / window.innerWidth; 
    const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
    confetti({
        particleCount: 49999,
        spread: 500,
        scalar: 1,
        ticks: 100,
        origin: { x: x, y: y}
    });
    feixiao++
    elem.textContent = `ong i was clicked x${feixiao}`;
};
