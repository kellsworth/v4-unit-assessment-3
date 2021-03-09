import React from "react";

const Shelf = (props) => {
  const { shelf, clearShelfFn } = props;

  const mappedTitles = shelf.map((title, index) => {
    return (
      <h4 key={index}>{title}</h4>
    )
  })

  return (
    <section>
      <button onClick={() => clearShelfFn()}>Clear Shelf</button>
      {mappedTitles}

    </section>
  )
}


export default Shelf;
