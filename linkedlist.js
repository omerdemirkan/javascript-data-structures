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
            for (let i = 0; i < init.length; i++) this.add(elements[i]);
        } else if (init) this.addToStart(init);
    }
    add = (el, pos = this._size) => {
        if (pos > this._size || pos < 0) return;

        el = el instanceof Node ? el : new Node(el);

        if (!this._size) {
            this._head = this._tail = el;
        } else if (pos === this._size) {
            this._tail = this._tail.next = el;
        } else if (pos === 0) {
            el.next = this._head;
            this._head = el;
        } else {
            let trav = head,
                i = 0;
            while (i++ < pos) trav = trav.next;
            this._tail = trav.next = el;
        }
        this._size++;
    };
    addToEnd = (el) => this.add(el, this._size);
    addToStart = (el) => this.add(el, 0);
    removeAt = (index) => {
        if (
            !this._size ||
            typeof index !== "number" ||
            index >= this._size ||
            index < 0
        )
            return;
        if (index === 0) {
            this._head = this._head.next;
        } else {
            let trav = this._head,
                i = 0;
            while (++i < index) trav = trav.next;
            trav.next = trav.next.next;
        }

        this._size--;
    };
    removeFirst = () => this.removeAt(0);
    removeLast = () => this.removeAt(this._size - 1);
    forEach = (cb) => {
        if (typeof cb !== "function") return;
        let trav = this._head;
        while (trav) {
            cb(trav.val);
            trav = trav.next;
        }
    };
    removeEach(cb) {
        if (typeof cb !== "function" || !this._size) return;

        let trav = this._head;
        if (cb(trav.val)) this.removeFirst();

        while (trav.next) {
            if (cb(trav.next.val)) trav.next = trav.next.next;
            trav = trav.next;
        }
    }
    size = () => this._size;
    isEmpty = () => this._size === 0;
}

const linkedList = new LinkedList();

linkedList.add(5);
linkedList.add(10);
linkedList.add(15);
linkedList.add(20);
linkedList.add(25);
linkedList.removeAt(2);
linkedList.forEach(console.log);
