import { scoringMethods } from "./configScore";
import { getLastScore } from "./dbRequest";

export async function calculateScore(
    card
) {
    return await calculateLastScore(card) + calculateRating(card);
};

async function calculateLastScore(
    card
) {
    const people = card.dataset.name;
    const score = await getLastScore(people);

    return Number(score);
};

function calculateRating(
    card
) {
    const checkboxes = Array.from(
        card.querySelectorAll(".score-input")
    );

    let score = 0;

    checkboxes.map(cb => {
        if (cb.checked) {
            score += scoringMethods[cb.getAttribute("data-type")];
        };
    })

    return Number(score);
};
