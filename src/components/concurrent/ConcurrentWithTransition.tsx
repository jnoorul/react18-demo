import { ChangeEvent, useState, useTransition } from 'react';
import { SearchResults } from '../batching/SearchResults';
import { Section } from '../common/Section';

export function ConcurrentWithTransition() {
  const [isPending, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');

  function onSearch(event: ChangeEvent<HTMLInputElement>) {
    const newSearchText = event.currentTarget.value;
    startTransition(() => setSearchText(newSearchText));
    // setSearchText(newSearchText);
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
      <Section isLoading={isPending}>
        <SearchResults searchTerm={searchText} />
      </Section>
    </div>
  );
}
