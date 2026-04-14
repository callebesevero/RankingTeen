import { ref, query, orderByKey, limitToLast, get } from "firebase/database";
import { db } from "./firebaseConfig";

export async function getLastRankingDate() {

};

export async function getLastRanking() {
    
};

export async function getLastRankedPeople() {
    const object = await getLastDBObject();
    const ranking = object[Object.keys(object)]["ranking"];

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
