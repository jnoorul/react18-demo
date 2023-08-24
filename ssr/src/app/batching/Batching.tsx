import { useState } from 'react';
import { Employee, getEmployees } from '../api/employee-search';
import { ExpensiveComponent } from '../components/common/ExpensiveComponent';
import { EmployeeCard } from '../components/common/Employee';

const PAGE_SIZE = 5;

export function Batching() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState(pageNumber * PAGE_SIZE);
  const [employees, setEmployees] = useState<Employee[]>(
    getEmployees(pageNumber * PAGE_SIZE)
  );
  const loadMore = () => {
    setTimeout(() => {
      const newPageNumber = pageNumber + 1;
      setPageNumber(newPageNumber);
      setNumberOfRows(newPageNumber * PAGE_SIZE); // Bad practice, just for explaining batching.
      setEmployees(getEmployees(newPageNumber * PAGE_SIZE));
    }, 100);
  };

  const reset = () => {
    const firstPageNumber = 1;
    setPageNumber(firstPageNumber);
    setNumberOfRows(firstPageNumber * PAGE_SIZE);
    setEmployees(getEmployees(firstPageNumber * PAGE_SIZE));
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
      <ExpensiveComponent />
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
}
