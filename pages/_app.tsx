import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { Layout, Header, Body } from "../modules";
import { Container } from "../components";
import "../global.css";
import { SearchTypes } from "../types/search.types";
import client from "../apolloClient";

const App = () => {
  const [search, setSearch] = useState<SearchTypes>();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <ApolloProvider client={client}>
      <Container>
        <Layout
          header={<Header search={handleInputChange} searchValue={search} />}
          body={<Body searchValue={search} />}></Layout>
      </Container>
    </ApolloProvider>
  );
};

export default App;
