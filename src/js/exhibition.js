import { getLastRankedPeople, getLastRanking } from "./dbRequest";
import { constructAddPeopleButton, constructPeopleCardRate } from "./constructor";

export async function exhibitEmptyRating() {
    try {
        const rankedPeople = await getLastRankedPeople();

        const rankedPeopleCardRate = rankedPeople.map(people => {
            return constructPeopleCardRate(people);
        });

        const addPeopleButton = constructAddPeopleButton();
    
        return rankedPeopleCardRate + addPeopleButton;
    } catch (err) {
        console.error(err);
    };
};
