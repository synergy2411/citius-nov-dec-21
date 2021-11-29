import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
window.onload = () => {
    const txtType = document.querySelector("#type");
    const txtTitle = document.querySelector("#title");
    const txtCreateAt = document.querySelector("#createdAt");
    const txtAmount = document.querySelector("#amount");
    const btnAdd = document.querySelector("#btnAdd");
    const btnReset = document.querySelector("#btnReset");
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        let doc;
        if (txtType.value === "invoice") {
            doc = new Invoice(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber);
        }
        else {
            doc = new Payment(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber);
        }
        console.log(doc);
    });
    btnReset.addEventListener("click", (event) => {
        event.preventDefault();
        txtTitle.value = "";
        txtCreateAt.value = "";
        txtAmount.value = "";
    });
};
