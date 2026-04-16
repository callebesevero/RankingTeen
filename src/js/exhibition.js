import { getLastRankedPeople, getLastRanking } from "./dbRequest";
import { constructAddPeopleButton, constructConfirmScoreButton, constructCopyRankingButton, constructPeopleRateCard, constructPeopleRatedCard } from "./constructor";

export async function exhibitEmptyRating() {
    try {
        const rankedPeople = await getLastRankedPeople();

        const rankedPeopleCardRate = (rankedPeople)
            ? rankedPeople.map(people => {
                return constructPeopleRateCard(people);
            }).join("")
            : "";

        const addPeopleButton = constructAddPeopleButton();
        const confirmScoreButton = constructConfirmScoreButton();
    
        return rankedPeopleCardRate + addPeopleButton + confirmScoreButton;
    } catch (err) {
        console.error(err);
    };
};

export async function exhibitLastRating() {
    try {
        const ranking = await getLastRanking();

        const peopleCards = ranking.map((people) => {
            const name = people["name"];
            const score = people["score"];
            
            return constructPeopleRatedCard(name, score);
        }).join("");
        const copyRankingButton = constructCopyRankingButton();

        return peopleCards + copyRankingButton;
    } catch (err) {
        console.log(err);
    };
};
