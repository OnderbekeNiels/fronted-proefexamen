import React, { useEffect, useState } from 'react';
import QuoteComponent from './components/QuoteComponent';
import Settings from './components/Settigns';
import logo from './logo.svg';
import { Quote } from './models/quote';
import './styles/screen.scss';
import { getQuotes } from './utils/api/quoteApi';


function App() {

  const [quotes, setQuotes] = useState<Quote[]>([{ author: "niels", content: "okayy lets go" }]);
  const [quoteDisplay, setQuoteDisplay] = useState<Quote>({ author: "niels", content: "okayy lets go" });
  const [color, setColor] = useState<string>("red");

  const getPageData = async () => {
    const data: any[] = await getQuotes();
    let quotes: Quote[] = []
    data.map(q => {
      quotes.push({ content: q.content.rendered, author: q.title.rendered })
    })
    console.log({ quotes });
    setQuotes(quotes);
  }

  useEffect(() => {
    getPageData();
  }, [])

  return (
    <main className={`c-app u-bg-color-settings--${color}-light`}>
      <section className={`c-content`}>
        <QuoteComponent className={`u-color-settings--${color}`} author={quoteDisplay.author} content={quoteDisplay.content} />
        <Settings handleRefresh={() => { setQuoteDisplay(quotes[Math.floor(Math.random() * quotes.length)])}} handleColorSetting={(value: string) =>{setColor(value)}}/>
      </section>
      <img className="c-visualizer" src="./img/jpeg/street.jpeg" alt="Photo of a steert with houses" />
    </main>
  );
}

export default App;
