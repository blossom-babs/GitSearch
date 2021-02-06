import React, { useState } from "react";

interface SearchBarProps {
  value?: string;
  onChange?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [word, setWord] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    onChange(word);
    setWord("");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          className="form__item form__children"
          placeholder="Search for a user..."
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="form__btn form__children">Search</button>
      </form>
    </div>
  );
};
