import { ChangeEvent, memo, useDeferredValue, useState } from 'react';
import { SearchResults } from '../batching/SearchResults';
import { Section } from '../common/Section';

const SearchResultsWithMemo = memo(SearchResults);

export function WithDeferred() {
  const [searchText, setSearchText] = useState('');
  const deferredSearchText = useDeferredValue(searchText);

  function onSearch(event: ChangeEvent<HTMLInputElement>) {
    const newSearchText = event.currentTarget.value;
    setSearchText(newSearchText);
  }

  return (
    <div className="m-8">
      <input
        type="text"
        id="search"
        className="block w-full border-2 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:ring-0"
        placeholder="Search Person"
        onChange={onSearch}
      />
      <Section isLoading={deferredSearchText !== searchText}>
        {/* <SearchResultsWithMemo searchTerm={searchText} /> */}
        <SearchResultsWithMemo searchTerm={deferredSearchText} />
      </Section>
    </div>
  );
}
