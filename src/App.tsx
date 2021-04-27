import React, { useEffect, useState } from 'react';
import QuoteComponent from './components/QuoteComponent';
import logo from './logo.svg';
import { Quote } from './models/quote';
import './styles/screen.scss';
import { getQuotes } from './utils/api/quoteApi';


function App() {

  const [quotes, setQuotes] = useState<Quote[]>([{ author: "niels", content: "okayy lets go" }]);

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
    <main className="c-app">
      <section>
        <QuoteComponent author={quotes[0].author} content={quotes[0].content} />
        
      </section>
      <img className="c-visualizer" src="./img/jpeg/street.jpeg" alt="Photo of a steert with houses" />
    </main>
  );
}

export default App;
