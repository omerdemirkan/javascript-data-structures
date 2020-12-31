class Stack {
    elements = [];
    constructor(elements = []) {
        if (elements && !Array.isArray(elements)) elements = [elements];
        this.elements = elements;
    }
    push = (el) => {
        this.elements.push(el);
    };
    pop = () => {
        return this.elements.pop();
    };
    peek = () => {
        return this.elements[this.elements.length - 1];
    };
    isEmpty = () => {
        return this.elements.length === 0;
    };
}
