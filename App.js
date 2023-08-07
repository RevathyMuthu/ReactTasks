import React, { useState } from "react";


function App() {

  const [searchterm, setSearchterm] = useState('')

  const emojiData =
    [
      {
        id: 1,
        symbol: "😃",
        name: "Smiling face with open mouth"
      },
      {
        id: 2,
        symbol: "😞",
        name: "SAD"
      },
      {
        id: 3,
        symbol: "🥲",
        name: "Crying"
      },
      {
        id: 4,
        symbol: "😠",
        name: "Angry"
      }

    ];

  const [filteredEmojis, setFilteredEmojis] = useState([]);

  const handleChange = ((e) => {
    const query = e.target.value;
    setSearchterm(query);
    const filteredEmojis = emojiData.filter((emojiData) =>
      emojiData.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmojis(filteredEmojis);


  });
  return (
    <div className="App">
      <div className="display">
        <h1> Emoji Search </h1>
        <input
          type="text"
          autoFocus
          placeholder='Search emojis'
          value={searchterm}
          onChange={handleChange}
        />


        <div className="emoji">

          {filteredEmojis.map((emojiData) =>
            <span key={emojiData.id}>
              {emojiData.symbol}
            </span>
          )}
        </div>
        <h3>Available Emojis</h3>
        <div className="emoji">

          {emojiData.map((emojiData) =>
            <span key={emojiData.id}>
              {emojiData.symbol}
            </span>
          )}
        </div>




      </div >
    </div >

  );

}

export default App;
