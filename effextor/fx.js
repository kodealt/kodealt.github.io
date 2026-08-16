export class ScrambledEggs {
    constructor(target) {
        this.target = target;
        this.chars = '!@#$%^&*()=+{}[]:\\";';
        this.update = this.update.bind(this);

    }

    applyText(aText){
        const olden = this.target.innerText;
        const len = Math.max(olden.length, aText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < len; i++){
            const from = olden[i] || '';
            const to = aText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({from, to, start, end})
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let out = '';
        let cmp = '';
        for (let i = 0, n = this.queue.length; i < n; i++){
            let {from, to, start, end, char} = this.queue[i];
            if (this.frame >= end){
                cmp++;
                out += to;
            } else if (this.frame >= start){
                if (!char || Math.random() < 0.20){
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                out += from
            }
        }
        this.target.innerHtml = output;
        if(complete === this.queue.length) {
            this.resolve();

        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++
        }
    }
    randomChar(){
        return this.chars[Math.floor(Math.ramdom() * this.chars.length)]
    }
}
