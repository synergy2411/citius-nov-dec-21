export class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        const day = this.createdAt.toLocaleString("en-US", { day: "numeric" });
        const month = this.createdAt.toLocaleString("en-US", { month: "long" });
        const year = this.createdAt.getFullYear();
        return `${month} ${day}, ${year} - ${this.amount} to be paid for ${this.title}`;
    }
}
// export default Payment;
