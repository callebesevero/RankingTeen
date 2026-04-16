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

export async function formatRankingToText() {
    const date = await getLastRankingDate();
    const ranking = await getLastRanking();

    const textRanking = ranking.map((people, position) => {
        if (position === 0) {        // gold medal 🥇
            return `🥇 ${people["name"]}   ${people["score"]} pontos\n`
        } else if (position === 1) { // silver medal 🥈
            return `🥈 ${people["name"]}   ${people["score"]} pontos\n`
        } else if (position === 2) { // bronze medal 🥉
            return `🥉 ${people["name"]}   ${people["score"]} pontos\n`
        } else {
            return `   ${people["name"]}   ${people["score"]} pontos\n`
        };
    }).join("");

    return `*RANKING ATUALIZADO - ${date}*\n${textRanking}`
};
