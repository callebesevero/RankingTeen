import { getSaturday } from "./date";
import { exhibitEmptyRating, exhibitLastRating } from "./exhibition";
import { addPeopleToDB, addToDB, getLastRankingDate } from "./dbRequest";
import { formatRankingToDB } from "./ranking";

const main = document.querySelector(".main-content");

const dateContainer = document.createElement("div");
dateContainer.classList.add("ranking-date");
dateContainer.append(getSaturday());
main.appendChild(dateContainer);

const rankingTableContainer = document.createElement("div");
rankingTableContainer.classList.add("ranking-table");

// do a condition to verify if the day is a saturday: 
//      if true -> change to new empty ranking
//      if false -> maintain last ranking -> copy message
if (getSaturday() === await getLastRankingDate()) { // if last saturday is in DB
    rankingTableContainer.innerHTML = await exhibitLastRating();
    main.appendChild(rankingTableContainer);
} else { // if last saturday is not in DB
    rankingTableContainer.innerHTML = await exhibitEmptyRating();
    main.appendChild(rankingTableContainer);

    const addPeople = document.querySelector("#button-addPeople");
    addPeople.addEventListener("click", async () => {
        const people = window.prompt("Insira o nome da pessoa para adicionar");
        if (people) {
            await addPeopleToDB(people);

            window.location.reload();
        };
    });

    const confirmScore = document.querySelector("#button-confirmScore");
    confirmScore.addEventListener("click", async () => {
        const date = getSaturday();
        const ranking = await formatRankingToDB();
        addToDB({ date, ranking });

        window.location.reload();
    });
};
