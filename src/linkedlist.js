function Node(val = null, next = null) {
    this.val = val || null;
    this.next = next || null;
}

class LinkedList {
    _size = 0;
    _head = null;
    _tail = null;
    constructor(init) {
        if (Array.isArray(init)) {
            this._size = init.length;
            for (let i = 0; i < init.length; i++) this.add(init[i]);
        } else if (init) this.addToStart(init);
    }
    add = (el, pos = this._size) => {
        if (pos > this._size || pos < 0)
            throw new Error("Invalid add position");

        let newNode = new Node(el);

        if (!this._size) {
            this._head = this._tail = newNode;
        } else if (pos === this._size) {
            this._tail = this._tail.next = newNode;
        } else if (pos === 0) {
            newNode.next = this._head;
            this._head = newNode;
        } else {
            let trav = this._head,
                i = 0;
            while (++i < pos) trav = trav.next;
            newNode.next = trav.next;
            trav.next = newNode;
        }
        this._size++;
    };
    removeAt = (index) => {
        if (typeof index !== "number" || index >= this._size || index < 0)
            throw new Error("Invalid index");

        let removedVal;

        if (index === 0) {
            removedVal = this._head.val;
            this._head = this._head.next;
        } else {
            let trav = this._head,
                i = 0;
            while (++i < index) trav = trav.next;
            removedVal = trav.next.val;
            trav.next = trav.next.next;
        }
        this._size--;
        return removedVal;
    };
    getAt = (index) => {
        if (index < 0 || index >= this._size) throw new Error("Invalid index");
        if (index === 0) return this._head.val;
        if (index === this._size - 1) return this._tail.val;
        let trav = this._head,
            i = 0;
        while (i++ < index) trav = trav.next;
        return trav.val;
    };

    addFirst = (el) => this.add(el, this._size);
    addEnd = (el) => this.add(el, 0);
    removeFirst = () => this.removeAt(0);
    removeLast = () => this.removeAt(this._size - 1);
    getFirst = () => this.getAt(0);
    getLast = () => this.getAt(this._size - 1);

    forEach = (cb) => {
        if (typeof cb !== "function") throw new Error("Invalid callback");
        let trav = this._head;
        while (trav) {
            cb(trav.val);
            trav = trav.next;
        }
    };
    contains = (el) => {
        let trav = this._head;
        while (trav) {
            if (trav.val === el || trav.val.equals(el)) return true;
            trav = trav.next;
        }
        return false;
    };
    removeEach(cb) {
        if (typeof cb !== "function") throw new Error("Invalid callback");

        const initialSize = this._size;

        while (this._size && cb(this._head.val)) this.removeFirst();
        if (!this._size) return initialSize;

        let trav = this._head;
        while (trav.next) {
            if (cb(trav.next.val)) {
                trav.next = trav.next.next;
                this._size--;
            } else {
                trav = trav.next;
            }
        }

        return initialSize - this._size;
    }
    size = () => this._size;
    isEmpty = () => this._size === 0;
}

module.exports = LinkedList;
