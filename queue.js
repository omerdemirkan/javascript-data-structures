class Queue {
    _elements = [];
    _offset = 0;
    constructor(init) {
        if (init) this._elements = Array.isArray(init) ? init : [init];
    }
    enqueue = (el) => this._elements.push(el);
    dequeue = () => {
        if (!this._elements.length) return;
        if (this._offset * 2 > this._elements.length) {
            this._elements = this._elements.slice(this._offset);
            this._offset = 0;
        } else {
            this._offset++;
        }
    };
    peek = () => this._elements[this._offset];
    size = () => this._elements.length;
    isEmpty = () => this._elements.length === 0;
    clear = () => {
        this._elements = [];
    };
}
