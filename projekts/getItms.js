var GI = 1; 
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
        card.style.boxShadow = `${-rotateY *0.2}px ${rotateX * 0.2}px 10px rgba(50,50,50,0.6)`;
    })

}

class Card{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.index = GI;
        GI++;

        this.rotVal = 360/this.index; //offset

        const container = document.getElementById('holder');
        const card = document.createElement('div');
        card.className = 'card';
        this.card = card;
        const titleText = document.createElement('div');
        titleText.textContent = title;
        titleText.className = 'ptitle';
        const desc = document.createElement('div');
        desc.textContent = description;
        desc.className = 'pdesc';
        card.appendChild(titleText);
        card.appendChild(desc);
        container.appendChild(card);
    }

    transformRotation(val){
        this.rotVal +=  val/cards.length * 0.3;
        this.card.style.transform = `rotateY(${this.rotVal}deg)`;
    }
    addHover(){
        this.hoverHandler = (e)=> {
            const rect = this.card.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xValue = (mouseX / width) - 0.5;
            const yValue = (mouseY / height) - 0.5;
            const maxRotation = 40;
            const rotateX = yValue * -maxRotation;
            const rotateY = xValue * maxRotation;
            this.card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            this.card.style.boxShadow = `${-rotateY *0.2}px ${rotateX * 0.2}px 10px rgba(50,50,50,0.6)`;
        }
        this.card.addEventListener('mousemove', this.hoverHandler)
    }
    removeHover(){
        this.card.removeEventListener('mousemove', this.hoverHandler)
    }

}

const projekt00 = new Card('projekt00', 'this site');
const projekt01 = new Card('projekt01', 'uhh');

const cards = [projekt00, projekt01];

console.log(projekt00.index)
console.log(projekt01.index)

const holder = document.getElementById('holder');

document.addEventListener('wheel', (e) => {
    for (const card of cards){
        card.transformRotation(e.deltaY);
        
    }
    console.log(e.deltaY)
})

// function carousel { //how does one even spell this word </3

// } 