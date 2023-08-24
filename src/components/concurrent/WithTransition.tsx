import { ChangeEvent, memo, useState, useTransition } from 'react';
import { SearchResults } from '../batching/SearchResults';
import { Loader } from '../common/Loader';
import { FakeLoader } from '../common/FakeLoader';

const SearchResultsWithMemo = memo(SearchResults);

export function WithTransition() {
  const [isPending, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');

  function onSearch(event: ChangeEvent<HTMLInputElement>) {
    const newSearchText = event.currentTarget.value;
    startTransition(() => setSearchText(newSearchText));
    // setSearchText(newSearchText);
  }

  return (
    <div className="mt-8">
      <FakeLoader />
      <input
        type="text"
        id="search"
        className="block w-full border-2 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:ring-0"
        placeholder="Search Person"
        onChange={onSearch}
      />
      <Loader isLoading={isPending} />
      <SearchResultsWithMemo searchTerm={searchText} />
    </div>
  );
}
