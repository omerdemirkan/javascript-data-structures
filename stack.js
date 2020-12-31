class Stack {
    _elements = [];
    constructor(init) {
        if (init) this._elements = Array.isArray(init) ? init : [init];
    }
    push = (el) => this._elements.push(el);
    pop = () => this._elements.pop();
    peek = () => this._elements[this._elements.length - 1];
    size = () => this._elements.length;
    isEmpty = () => this._elements.length === 0;
    clear = () => {
        this._elements = [];
    };
}
