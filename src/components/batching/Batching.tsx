import { useState } from 'react';
import { CardList } from './CardList';

export function Batching() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState(5);
  const loadMore = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
      setNumberOfRows(pageNumber * 5);
    }, 10);
  };

  return (
    <div className="m-6">
      <ExpensiveComponent />
      <button
        className="border border-red-800 p-2 rounded-md m-4"
        onClick={() => loadMore()}
      >
        Load more...
      </button>
      <h3>{`Current Page: ${pageNumber}`}</h3>
      <h3>{`Number of Rows: ${numberOfRows}`}</h3>
      {[...Array(pageNumber).keys()].map(() => (
        <CardList />
      ))}
    </div>
  );
}

function ExpensiveComponent() {
  console.log('Rendering...');
  for (let i = 0; i < 1000000000; i++) {}
  return null;
}
