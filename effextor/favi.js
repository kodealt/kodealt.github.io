export function logos(subFolder = 'f3', frames = 24, faviconInterval = 100, toggleIsTrue = true) {
        const images = [];
        
        for (let i = 0; i <= frames; i++){
            const img = new Image();
            img.src = `/assets/${subFolder}/00${(i%frames+1).toString().padStart(2,'0')}.png`;
            images.push(img);
        }

        let favicon = document.querySelector("link[rel~='icon']");

        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/png';
            document.head.appendChild(favicon);
        }
        
        let f = 0;

        const update = () => {
            favicon.href = images[f].src;
            f = (f+1)%frames;
        }
        update();
        return setInterval(update, faviconInterval);

}

