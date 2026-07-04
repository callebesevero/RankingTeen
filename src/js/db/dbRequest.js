import { ref, query, orderByKey, orderByChild, equalTo, get, set } from "firebase/database";
import { db } from "./firebaseConfig";
import * as route from "./routes"

export async function getLastRankingDate() {
    const object = await getLastDBObject();
    return object["date"];
};

export async function getLastRanking() {
    const object = await getLastDBObject();
    return object["ranking"];
};

export async function getLastRankedPeople() {
    const object = await getLastDBObject();
    const ranking = object?.ranking;

    if (!ranking) {
        return null;
    };

    const people = Object.keys(ranking).map(key => {
        return ranking[key]["name"];
    });

    return people;
};

export async function getLastScore(
    people
) {
    const rankingRef = ref(db, route.ranking);
    const nameSearch = query(rankingRef, orderByChild("name"), equalTo(people));

    return get(nameSearch).then(snapshot => {
        if (snapshot.exists()) {
            return snapshot.val()[Object.keys(snapshot.val())]["score"];
        };
    });
};

async function getLastDBObject() {
    const lastObjectQuery = query(
        ref(db, "/"), 
        orderByKey()
    );

    const snapshot = await get(lastObjectQuery);

    if (snapshot.exists()) {
        return snapshot.val(); // convert to object
    } else {
        return "";
    };
};

export async function addPeopleToDB(
    people
) {
    const date = await getLastRankingDate();
    const ranking = await getLastRanking() || {};
    const peopleNumber = Object.keys(ranking).length > 0
        ? Math.max(...Object.keys(ranking)) + 1
        : 0;

    ranking[peopleNumber] = { 
        "name": `${people}`, 
        "score": "0" 
    };
    
    const newRanking = {
        "date": `${date}`,
        ranking
    };

    await addToDB(newRanking);
};

export async function addToDB(
    item
) {
    await set(ref(db, "/"), item);
};
