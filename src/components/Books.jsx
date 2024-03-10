import React from "react";
import classes from "../modules/Books.module.scss";

const Books = ({ books }) => {
  return (
    <div className={classes["books-wrapper"]}>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={`Cover for ${book.title}`}
              />
            )}
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author(s):</strong>{" "}
            {book.author_name && book.author_name.join(", ")}
            <br />
            <strong>First Published Year:</strong> {book.first_publish_year}
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
