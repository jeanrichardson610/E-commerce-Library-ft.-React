import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "./ui/Ratings";
import Price from "./ui/Price";

const Book = ({ book }) => {
  const [loaded, setLoaded] = useState(false);

  

 return (
    <div className="book">
      {!loaded && (
        <div className="book__img--skeleton">
          <div className="skeleton book__title--skeleton">
            <div className="skeleton book__rating--skeleton">
              <div className="skeleton book__price--skeleton"></div>
            </div>
          </div>
        </div>
      )}

      <Link to={`/books/${book.id}`} className={!loaded ? "hidden" : ""}>
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt={book.title}
            className="book__img"
            onLoad={() => setLoaded(true)}
          />
        </figure>
      </Link>

      {loaded && (
        <>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Ratings rating={book.rating} />
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
      )}
    </div>
  );
};


export default Book;
