import React, { useState } from "react";
import "./styles/app.scss";
import { Footer, SearchBar, DataList } from "./components";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (word: string) => {
    setSearchTerm(word);
  };
  return (
    <>
      <h1 className="header__title first__header__title">GitSearch</h1>
      <SearchBar onChange={onChange} />
      <DataList searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
