import { getLastRankedPeople, getLastRanking } from "./dbRequest";
import { constructAddPeopleButton, constructConfirmScoreButton, constructPeopleRateCard } from "./constructor";

export async function exhibitEmptyRating() {
    try {
        const rankedPeople = await getLastRankedPeople();

        const rankedPeopleCardRate = rankedPeople.map(people => {
            return constructPeopleRateCard(people);
        });

        const addPeopleButton = constructAddPeopleButton();
        const confirmScoreButton = constructConfirmScoreButton();
    
        return rankedPeopleCardRate + addPeopleButton + confirmScoreButton;
    } catch (err) {
        console.error(err);
    };
};
