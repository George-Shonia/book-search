import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Books from "./components/Books";

const App = () => {
  const [bookSearch, setBookSearch] = useState("");
  const [bookSearchType, setBookSearchType] = useState("all");
  const [books, setBooks] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFetchData(true);
  };

  const onChangeHandler = (e) => {
    setBookSearch(e.target.value);
  };

  const onSearchTypeChangeHandler = (e) => {
    setBookSearchType(e.target.value);
    console.log(bookSearchType);
  };

  useEffect(() => {
    if (fetchData) {
      axios
        .get(
          `https://openlibrary.org/search.json?q=${bookSearchType}:${bookSearch}`
        )
        .then((response) => {
          console.log(response.data);
          setBooks(response.data.docs);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    setFetchData(false);
  }, [fetchData, bookSearch, bookSearchType]);

  return (
    <div>
      <Navbar
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        onSearchTypeChangeHandler={onSearchTypeChangeHandler}
        bookSearchType={bookSearchType}
      />
      {books === "" && fetchData && <h1>Loading...</h1>}
      <Books books={books} />
    </div>
  );
};

export default App;
