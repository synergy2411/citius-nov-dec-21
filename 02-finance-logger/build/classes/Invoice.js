export class Invoice {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `${this.createdAt} - ${this.amount} to be received from ${this.title}`;
    }
}
