import React from "react";
import classes from "../modules/Books.module.scss";

const Books = ({ books }) => {
  return (
    <div className={classes["books-wrapper"]}>
      <ul>
        {books.map((book, index) => (
          <li key={index} className={classes["book-item"]}>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={`Cover for ${book.title}`}
                className={classes["book-cover"]}
              />
            ) : (
              <div className={classes["no-image"]}>No Image Available</div>
            )}
            <div className={classes["book-info"]}>
             <p> <strong>Title:</strong> {book.title}</p>
           
              <p>            <strong>Author(s):</strong>{" "}
              {book.author_name && book.author_name.join(", ")}</p>
           
              <p><strong>First Published Year:</strong> {book.first_publish_year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

