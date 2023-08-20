import { TabName } from '../concurrent/Concurrent';

export interface ButtonOption {
  label: string;
  value: TabName;
}

interface ButtonGroupProps {
  options: ButtonOption[];
  onSelect: (value: TabName) => void;
  activeTab: TabName;
}

export default function ButtonGroup({
  options,
  onSelect,
  activeTab,
}: ButtonGroupProps) {
  const baseClassNames =
    'relative items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10';

  return (
    <span className="my-6 items-center isolate inline-flex rounded-md shadow-sm border-0 00">
      {options.map((option) => (
        <button
          type="button"
          className={`${baseClassNames} ${
            option.value === activeTab ? 'bg-red-500' : ''
          }`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </span>
  );
}
