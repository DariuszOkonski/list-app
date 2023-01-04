import React, { useEffect, useState } from "react";

export default function AgeGuesserAnswer(props) {
  const [age, setAge] = useState(null);
  const [count, setCount] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const res = await fetch(`https://api.agify.io/?name=${props.name}`);
        const data = await res.json();
        setAge(data.age);
        setCount(data.count);
      } catch (error) {
        setError("Błąd wczytywania");
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  if (age === null && count === false) return <p>Wczytywanie...</p>;

  if (age === null && count === 0) {
    return <p>Nie znaleziono</p>;
  }

  return (
    <>
      <p>Twój wiek: {age}</p>
      <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
  );
}
