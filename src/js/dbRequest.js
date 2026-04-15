import { ref, query, orderByKey, limitToLast, get, set } from "firebase/database";
import { db } from "./firebaseConfig";

export async function getLastRankingDate() {
    const object = await getLastDBObject();
    const date = object["date"];
    
    return date;
};

export async function getLastRanking() {
    const object = await getLastDBObject();
    const ranking = object["ranking"];

    return ranking;
};

export async function getLastRankedPeople() {
    const object = await getLastDBObject();
    const ranking = object["ranking"];

    const people = Object.keys(ranking).map(key => {
        return ranking[key]["name"];
    });

    return people;
};

async function getLastDBObject() {
    const lastObjectQuery = query(
        ref(db, "/"), 
        orderByKey(), 
        limitToLast(1)
    );

    const snapshot = await get(lastObjectQuery);

    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return "";
    };
};

export async function addPeopleToDB(
    people
) {
    const date = await getLastRankingDate();
    const ranking = await getLastRanking();
    const peopleNumber = Math.max(...Object.keys(ranking)) + 1;

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
