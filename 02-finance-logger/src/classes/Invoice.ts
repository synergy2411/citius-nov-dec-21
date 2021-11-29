import { HasFormatter } from '../model/HasFormatter.js';

export class Invoice implements HasFormatter{
    constructor(
        private title : string,
        private createdAt : Date,
        private amount : number
    ){}
    format(){
        return `${this.createdAt} - ${this.amount} to be received from ${this.title}`
    }
}