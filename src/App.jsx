import "./styles.css";
import {
  getComunesOrderedByTwoDoses,
} from "./client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { MyTable } from "./MyTable";

export default function App() {
  const [allComunes, setAllComunes] = useState([]);
  const [comunes, setComunes] = useState([]);
  const [siglas, setSiglas] = useState([]);

  useEffect(() => {
    getComunesOrderedByTwoDoses()
      .then((res) => res.json())
      .then((data) => {
        setComunes(data);
        setAllComunes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const uniqueSiglas = [...new Set(allComunes.map((item) => item.sigla))];
    setSiglas(uniqueSiglas);
    console.log(siglas);
  }, [allComunes]);

  return (
    <>
      <div>
        <Header setComunes={setComunes} siglas={siglas} />
      </div>
      <div>
        <MyTable items={comunes} />
      </div>
    </>
  );
}
