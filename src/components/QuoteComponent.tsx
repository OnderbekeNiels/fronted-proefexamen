import React from 'react';

function QuoteComponent(props: any) {
    return (
        <article className={`c-quote ${props.className}`}>
            <p className="c-quote__icon">❞</p>
            <h3 className="c-quote__content">{props.content.substring(0, 3) === "<p>" ? props.content.substring(3, props.content.length - 5) : props.content}</h3>
            <p className="c-quote__author">- {props.author}</p>
        </article>
    )
}

export default QuoteComponent;