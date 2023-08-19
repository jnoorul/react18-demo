import { useState } from 'react';
import { CardList } from './CardList';

export function Batching() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState(5);
  const loadMore = () => {
    setTimeout(() => {
      setPageNumber((pageNumber) => pageNumber + 1);
      setNumberOfRows((numberOfRows) => numberOfRows + 5);
    }, 100);
  };

  const reset = () => {
    setPageNumber(1);
    setNumberOfRows(5);
  };

  return (
    <div className="m-6">
      <button
        className="border border-red-800 p-2 rounded-md m-4"
        onClick={() => loadMore()}
      >
        Load more...
      </button>
      <button
        className="border border-red-800 p-2 rounded-md m-4"
        onClick={() => reset()}
      >
        Reset
      </button>
      <h3>{`Current Page: ${pageNumber}`}</h3>
      <h3>{`Number of Rows: ${numberOfRows}`}</h3>
      <CardList noOfCards={numberOfRows} />
    </div>
  );
}
