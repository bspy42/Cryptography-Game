import React from "react";

interface AlphabetTableProps {
  guesses: { [key: number]: string };
}

const AlphabetTable: React.FC<AlphabetTableProps> = ({ guesses }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="alphabet-table">
      {alphabet.map((letter, index) => {
        const guessed = Object.values(guesses).includes(letter);
        return (
          <span
            key={index}
            style={{ color: guessed ? "green" : "white", margin: "0 5px" }}
          >
            {letter.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default AlphabetTable;