import React from "react";
import QuoteForm from "./features/quotes/QuoteForm";
import Quotes from "./features/quotes/Quotes";

function App() {
  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
      <hr />
      <QuoteForm />
      <Quotes />
      {/*
          TODO:

          Render QuoteForm and Quotes Components
         */}
    </div>
  );
}

export default App;
