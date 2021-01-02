class Heap {
    _elements = [];
    _compare = (a, b) => b - a;
    // positive means first has higher prescedence,
    // acts as a min heap by default
    constructor(init) {
        if (typeof init === "function") this._compare = init;
        else if (Array.isArray(init)) init.forEach(this.insert);
        else if (init) this.insert(init);
    }
    insert = (el) => {
        this._elements.push(el);
        let i = this._elements.length - 1,
            parentIndex = Math.floor((i - 1) / 2);
        while (i > 0 && this._compare(el, this._elements[parentIndex]) > 0) {
            this._elements[i] = this._elements[parentIndex];
            this._elements[parentIndex] = el;
            i = parentIndex;
            parentIndex = Math.floor((i - 1) / 2);
        }
    };
    remove = () => {
        let removedEl = this._elements[0],
            replacedEl = this._elements.pop();
        this._elements[0] = replacedEl;
        let i = 0,
            rIndex = 2,
            lIndex = 1;
        while (
            (lIndex < this._elements.length &&
                this._compare(replacedEl, this._elements[lIndex]) < 0) ||
            (rIndex < this._elements.length &&
                this._compare(replacedEl, this._elements[rIndex]) < 0)
        ) {
            let swapIndex = lIndex;
            if (
                this._compare(this._elements[rIndex], this._elements[lIndex]) >
                0
            )
                swapIndex = rIndex;

            this._elements[i] = this._elements[swapIndex];
            this._elements[swapIndex] = replacedEl;
            i = swapIndex;
            rIndex = 2 * i + 2;
            lIndex = 2 * i + 1;
        }
        return removedEl;
    };
    size = () => this._elements.length;
    isEmpty = () => this._elements.length === 0;
}

module.exports = Heap;
