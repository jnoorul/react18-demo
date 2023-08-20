import { Employee } from '../../api/employee-search';
import { EmployeeCard } from './Employee';
import { ExpensiveComponent } from './ExpensiveComponent';

interface EmployeeListProps {
  employees: Employee[];
}

export function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div>
      {[...Array(3).keys()].map((_, index) => (
        <ExpensiveComponent key={index} />
      ))}
      <ul className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        {employees.map((employee) => (
          <EmployeeCard employee={employee} />
        ))}
      </ul>
    </div>
  );
}
