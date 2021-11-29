export class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `${this.createdAt} - $${this.amount} to be paid for ${this.title}`;
    }
}
// export default Payment;
