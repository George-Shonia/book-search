import classes from "../modules/Navbar.module.scss";

const Navbar = ({
  onSubmitHandler,
  onChangeHandler,
  onSearchTypeChangeHandler,
  bookSearchType,
}) => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <h1>Search for a Book</h1>
      <form onSubmit={onSubmitHandler} className={classes["search-container"]}>
        <div>
          <select
            name="select"
            id=""
            onChange={onSearchTypeChangeHandler}
            value={bookSearchType}
          >
            <option value="all">All</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          <input
            type="text"
            placeholder="search for a book..."
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
