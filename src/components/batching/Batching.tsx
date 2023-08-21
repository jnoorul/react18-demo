import { useState } from 'react';
import { SearchResults } from './SearchResults';

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
    <div>
      <div className="flex flex-row my-8">
        <button
          className="border border-red-600 p-2 rounded-sm"
          onClick={() => loadMore()}
        >
          Load more...
        </button>
        <button
          className="border border-red-600 p-2 rounded-sm ml-4"
          onClick={() => reset()}
        >
          Reset
        </button>
        <div className="ml-6">
          <p className="text-red-500 font-bold text-sm">{`Current Page: ${pageNumber}`}</p>
          <p className="text-red-500 font-bold text-sm">{`Number of Rows: ${numberOfRows}`}</p>
        </div>
      </div>
      <SearchResults searchTerm={'Credit Suisse'} />
    </div>
  );
}
