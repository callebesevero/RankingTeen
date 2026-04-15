import { getSaturday } from "./date";
import { exhibitEmptyRating } from "./exhibition";
import { addPeopleToDB } from "./dbRequest";

const main = document.querySelector(".main-content");

// do a condition to verify if the day is a saturday: 
//      if true -> change to new empty raniking
//      if false -> maintain last ranking
const date = document.createElement("div");
date.classList.add("ranking-date");
date.append(getSaturday());
main.appendChild(date);

const rankingTable = document.createElement("div");
rankingTable.classList.add("ranking-table");
rankingTable.innerHTML = await exhibitEmptyRating();
main.appendChild(rankingTable);

const addPeople = document.querySelector("#button-addPeople");
addPeople.addEventListener("click", async () => {
    const people = window.prompt("Insira o nome da pessoa para adicionar");
    if (people) {
        await addPeopleToDB(people);

        window.location.reload();
    };
});
