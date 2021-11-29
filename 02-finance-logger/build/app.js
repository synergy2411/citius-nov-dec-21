import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from './classes/ListTemplate.js';
window.onload = () => {
    const txtType = document.querySelector("#type");
    const txtTitle = document.querySelector("#title");
    const txtCreateAt = document.querySelector("#createdAt");
    const txtAmount = document.querySelector("#amount");
    const btnAdd = document.querySelector("#btnAdd");
    const btnReset = document.querySelector("#btnReset");
    const ul = document.querySelector("#finance-list");
    let list = new ListTemplate(ul);
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        let doc;
        if (txtType.value === "invoice") {
            doc = new Invoice(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber);
        }
        else {
            doc = new Payment(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber);
        }
        list.render(doc, txtType.value);
    });
    btnReset.addEventListener("click", (event) => {
        event.preventDefault();
        txtTitle.value = "";
        txtCreateAt.value = "";
        txtAmount.value = "";
    });
};
