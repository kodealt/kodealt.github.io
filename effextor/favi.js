export async function logos(subFolder = 'f3', frames = 24, faviconInterval = 175, toggleIsTrue = true) {
        const images = await Promise.all(
            Array.from({length: frames}, (_, i) =>{
                const frame = (i+1).toString().padStart(2, "0");
                const img = new Image();
                img.src = `/assets/${subFolder}/00${frame}.png`;
                return new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });
            })
        );
        

        
        

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

