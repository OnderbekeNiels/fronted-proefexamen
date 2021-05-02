import React, { useEffect, useState } from 'react';
import QuoteComponent from './components/QuoteComponent';
import Settings from './components/Settigns';
import logo from './logo.svg';
import { Quote } from './models/quote';
import './styles/screen.scss';
import { getData, getQuotes } from './utils/api/quoteApi';


function App() {

  const [quotes, setQuotes] = useState<Quote[]>([{ author: "niels", content: "okayy lets go" }]);
  const [quoteDisplay, setQuoteDisplay] = useState<Quote>({ author: "niels", content: "okayy lets go" });
  const [color, setColor] = useState<string>("red");

  const getPageData = async () => {
    const data: any[] = await getQuotes();
    const dataGetAcces = await getData("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=1619512519356");
    console.log({dataGetAcces});
    let quotes: Quote[] = []
    data.map(q => {
      quotes.push({ content: q.content.rendered, author: q.title.rendered })
    })
    console.log({ quotes });
    setQuotes(quotes);
    setQuoteDisplay(quotes[0]);
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
      <section className="c-visualizer-holder"> 
        <img className="c-visualizer" src="./img/jpeg/street.jpeg" alt="Photo of a steert with houses" />
      </section>
     
    </main>
  );
}

export default App;
