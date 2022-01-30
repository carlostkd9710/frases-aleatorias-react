import { Button } from "react-bootstrap";
import styles from '../css/styles.css'

export const QuoteBox=({quote, handleNewQuote})=>{
    console.log(quote);
    return(
    <div id="quote-box">
        <p id="text">{quote.text}</p>
        <h2 id="author">{quote.author}</h2>
        <div className="actions">
            <Button id="new-quote" className="button" onClick={handleNewQuote} >New Quote</Button>
            <a href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blanck">Tweet</a>
        </div>
    </div>
   )
}