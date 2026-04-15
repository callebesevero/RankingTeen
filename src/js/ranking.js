import { getLastRanking, getLastRankingDate } from "./dbRequest";

export function formatRankingToText() {
    const date = getLastRankingDate();
    const ranking = getLastRanking();

    const textRanking = ranking.map(people => {
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
