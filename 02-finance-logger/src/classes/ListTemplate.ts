import { HasFormatter } from "../model/HasFormatter";

export class ListTemplate {
    constructor(
        private container : HTMLUListElement
    ){}

    render(item : HasFormatter, heading : string){
        const li = document.createElement("li");
        li.className = "list-group-item"
        const h4 = document.createElement("h4");
        h4.className = "float-left"
        h4.innerText = heading.toUpperCase();
        li.append(h4)
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p)
        this.container.prepend(li)
    }
}