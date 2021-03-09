import React from "react";


const BookList = (props) => {
  const { books, addToShelfFn } = props;

  const mappedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <img src={book.img} alt={book.title} onClick={() => addToShelfFn(book.title)} />
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
      </div>
    )
  })

  return (
    <section>{mappedBooks}</section>
  )
}
export default BookList;



