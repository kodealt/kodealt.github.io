export function logos(subFolder = 'f3', frames = 24, faviconInterval = 100, toggleIsTrue = true) {
       let j = 0;
       setLogo(`/assets/${subFolder}/00${(j%frames+1).toString().padStart(2,'0')}.png`);   

       const logoInterval = setInterval(() => {
           if (!toggleIsTrue) {
               clearInterval(logoInterval);
                return;
           }
       setLogo(`/assets/${subFolder}/00${(j%frames+1).toString().padStart(2,'0')}.png`);
       j++;
       }, faviconInterval);

}

function setLogo(url, size = "64x64") {
    document.querySelectorAll("link[rel~='icon']").forEach(link => link.remove());
    
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = url;
    link.sizes = size;
    document.head.appendChild(link);
}
