import { HasFormatter } from "../model/HasFormatter.js";

export class Payment implements HasFormatter{
  constructor(
    private title: string,
    private createdAt: Date,
    private amount: number
  ) {}
  
  format() {
    return `${this.createdAt} - $${this.amount} to be paid for ${this.title}`;
  }
}

// export default Payment;
