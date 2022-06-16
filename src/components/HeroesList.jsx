import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

function HeroesList() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [heroes, setHeroes] = useState([]);
  const getHeroesData = async () => {
    try {
      let collectionRef = collection(db, "heroes");
      let queryRef = query(collectionRef, orderBy("name", "asc"));
      let quarySnap = await getDocs(queryRef);

      if (quarySnap.empty) {
        console.log("No Docs found");
      } else {
        let heroesData = quarySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setHeroes(heroesData);
      }
    } catch (ex) {
      console.log("Firesgtore Failure", ex.message);
    }
  };

  return (
    <div>
      <button onClick={() => getHeroesData()}>Get Heroes</button>
      <br />
      {heroes.map((hero) => {
        return (
          <ul key={hero.DOC_ID}>
            <li>name:{hero.name}</li>
            <li>Vehicle:{hero.Vehicle}</li>
            <li>docId:{hero.DOC_ID}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default HeroesList;
