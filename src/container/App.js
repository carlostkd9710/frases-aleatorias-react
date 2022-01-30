import { useState } from "react";
import { QuoteBox } from "../components/QuoteBox";
import { quoteData } from "../components/QuoteData";

function App() {
const [quote, setQuote] = useState(quoteData[Math.round(Math.random() * ((quoteData.length-1) -0) +0)]);
/* console.log(quote); */
const handleNewQuote=()=>{
    setQuote(quoteData[Math.round(Math.random() * ((quoteData.length-1) -0) +0)]);
}
  return (
    <>
      <div className="App">
        <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
      </div>
    </>
  );
}

export default App;
