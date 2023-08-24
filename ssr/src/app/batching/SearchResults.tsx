import { searchEmployees } from '../api/employee-search';
import { EmployeeList } from '../components/common/EmployeeList';

interface SearchResultsProps {
  searchTerm: string;
}

export async function SearchResults({ searchTerm }: SearchResultsProps) {
  const searchResults = await searchEmployees(searchTerm);
  return <EmployeeList employees={searchResults} />;
}
