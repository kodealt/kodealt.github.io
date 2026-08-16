// get shit from profile and post here.
// make like hoverable shit and little previews of md, some images if possible
//
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
}

buildCard('projekt00', 'this site')
