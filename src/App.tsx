import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { DataList } from "./components/DataList";
import "./styles/app.scss";
import { Footer } from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (word: string) => {
    setSearchTerm(word);
  };
  return (
    <ApolloProvider client={client}>
      <>
        <h1 className="header__title first__header__title">GitSearch</h1>
        <SearchBar onChange={onChange} />
        <DataList searchTerm={searchTerm} />
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;
