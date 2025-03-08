import React from 'react';
import './FrequencyTable.css'; // Import the CSS file

interface FrequencyTableProps {
  message: string;
  letterToIndex: { [key: string]: number };
  guesses: { [key: number]: string }; // Add guesses prop
}

const FrequencyTable: React.FC<FrequencyTableProps> = ({ message, letterToIndex, guesses }) => {
    const numbers = Array.from({ length: 26 }, (_, i) => i + 1);
    const frequencies = Array(26).fill(0);

    for (const char of message.toLowerCase()) {
        if (letterToIndex[char] !== undefined) {
            frequencies[letterToIndex[char] - 1]++;
        }
    }

    return (
    <div className="frequency-table-container">
      <h2>Frequency Table</h2>
      <table>
        <thead>
          <tr>
            {numbers.map(num => (
              <th key={num} className="table-cell">{num}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {frequencies.map((freq, index) => (
              <td key={index} className={guesses[index + 1] && guesses[index + 1] !== "_" || frequencies[index] === 0 ? "guessed" : "table-cell"}>{freq}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FrequencyTable;