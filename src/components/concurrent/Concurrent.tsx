import { ChangeEvent, useState, useTransition } from 'react';
import { CardList } from '../batching/CardList';

export function Concurrent() {
  const [, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');
  const [noOfCards, setNoOfCards] = useState(10);

  function onSearch(event: ChangeEvent<HTMLInputElement>) {
    const newSearchText = event.currentTarget.value;
    setSearchText(newSearchText);
    startTransition(() => setNoOfCards(10 - newSearchText.length));
  }

  return (
    <div className="m-8 border-2">
      <input
        type="text"
        id="search"
        className="block w-full border-2 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:ring-0"
        placeholder="Search Person"
        value={searchText}
        onChange={onSearch}
      />
      <CardList noOfCards={noOfCards} />
    </div>
  );
}
