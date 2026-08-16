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
        for (let i = 0, n = this.queue.length; )
    }
}
