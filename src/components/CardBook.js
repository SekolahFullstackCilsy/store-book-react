import React from "react";

function CardBook({ book }) {
  return (
    <div className="col-md-4 card" style={{ margin: 5 }}>
      <h3>Title: {book.title}</h3>
      <small>Desc: {book.description}</small>
      <h4>Author: {book.author}</h4>
    </div>
  );
}
export default CardBook;
