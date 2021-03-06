import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./model/HasFormatter.js";
import { ListTemplate } from './classes/ListTemplate.js';

window.onload = () => {
  const txtType = document.querySelector("#type") as HTMLSelectElement;
  const txtTitle = document.querySelector("#title") as HTMLInputElement;
  const txtCreateAt = document.querySelector("#createdAt") as HTMLInputElement;
  const txtAmount = document.querySelector("#amount") as HTMLInputElement;
  const btnAdd = document.querySelector("#btnAdd") as HTMLButtonElement;
  const btnReset = document.querySelector("#btnReset") as HTMLButtonElement;
  const ul = document.querySelector("#finance-list") as HTMLUListElement;
    let list = new ListTemplate(ul);


  btnAdd.addEventListener("click", (event: Event) => {
    event.preventDefault();
    let doc : HasFormatter;
    if(txtType.value === "invoice"){
        doc = new Invoice(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber)
    }else{
        doc = new Payment(txtTitle.value, new Date(txtCreateAt.value), txtAmount.valueAsNumber)
    }
    list.render(doc, txtType.value)
  });

  btnReset.addEventListener("click", (event: Event) => {
    event.preventDefault();
    txtTitle.value = "";
    txtCreateAt.value = "";
    txtAmount.value = "";
  });
};
