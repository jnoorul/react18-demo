import { searchEmployees } from '../../api/employee-search';
import { EmployeeList } from '../common/EmployeeList';

interface SearchResultsProps {
  searchTerm: string;
}

export function SearchResults({ searchTerm }: SearchResultsProps) {
  const searchResults = searchEmployees(searchTerm);
  return <EmployeeList employees={searchResults} />;
}
