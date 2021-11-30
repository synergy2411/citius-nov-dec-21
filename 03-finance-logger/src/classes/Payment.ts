import { HasFormatter } from "../model/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    private title: string,
    private createdAt: Date,
    private amount: number
  ) {}

  format() {
    const day = this.createdAt.toLocaleString("en-US", { day: "numeric" });
    const month = this.createdAt.toLocaleString("en-US", { month: "long" });
    const year = this.createdAt.getFullYear();

    return `${month} ${day}, ${year} - ${this.amount} to be paid for ${this.title}`;
  }
}

// export default Payment;
