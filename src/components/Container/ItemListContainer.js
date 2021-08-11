import React from 'react';
import "./ItemListContainer.scss";

export default function ItemListContainer({titleText}) {
    return (
        <section className={"itemListContainer"}>
            <h2>{titleText}</h2>
        </section>
    )
}
