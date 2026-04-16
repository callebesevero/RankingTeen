import { getLastRanking, getLastRankingDate } from "./dbRequest";
import { calculateScore } from "./score";

export async function formatRankingToDB() {
    const cards = Array.from(
        document.querySelectorAll(".people-rate-card")
    );

    const scores = await Promise.all(cards.map(async (card) => {
        const peopleName = card.dataset.name;
        const peopleScore = await calculateScore(card);

        return { "name": peopleName, "score": peopleScore };
    }));
    
    // ordenate ranking by score
    scores.sort((a, b) => b.score - a.score);
    
    return scores;
};

export function formatRankingToText() {
    const date = getLastRankingDate();
    const ranking = getLastRanking();

    const textRanking = ranking.map((people) => {
        if (people === 1) {        // gold medal 🥇
            return `🥇 ${people["name"]} - ${people["score"]} pontos\n`
        } else if (people === 2) { // silver medal 🥈
            return `🥈 ${people["name"]} - ${people["score"]} pontos\n`
        } else if (people === 3) { // bronze medal 🥉
            return `🥉 ${people["name"]} - ${people["score"]} pontos\n`
        } else {
            return `   ${people["name"]} - ${people["score"]} pontos\n`
        };
    });

    return `
    *RANKING ATUALIZADO - ${date}*\n
    ${textRanking}
    `
};
