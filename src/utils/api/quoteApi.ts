import { Quote } from "../../models/quote";

export const getQuotes = async (): Promise<any[]> => {
    let quotes: Quote[] = []
    let data = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=1619512519356');
    return data.json();
}