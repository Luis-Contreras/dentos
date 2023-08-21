import React from "react";
import { Layout } from "../modules";
import "../global.css";
import { Header } from "../components";

const App = () => {
  return <Layout header={<Header />}></Layout>;
};

export default App;
