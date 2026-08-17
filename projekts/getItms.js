
function buildCard(title, description){
    const container = document.getElementById('holder');
    const card = document.createElement('div');
    card.className = 'card';
    const titleText = document.createElement('div');
    titleText.textContent = title;
    titleText.className = 'ptitle';
    const desc = document.createElement('div');
    desc.textContent = description;
    desc.className = 'desc';
    card.appendChild(titleText);
    card.appendChild(desc);
    container.appendChild(card);
    card.addEventListener('mousemove', (e)=> {
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xValue = (mouseX / width) - 0.5;
        const yValue = (mouseY / height) - 0.5;
        const maxRotation = 40;
        const rotateX = yValue * -maxRotation;
        const rotateY = xValue * maxRotation;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `${-rotateY *0.2}px ${rotateX * 0.2}px 10px rgba(0200,75,75,0.6)`;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
    })
}
buildCard('projekt00', 'this site')
