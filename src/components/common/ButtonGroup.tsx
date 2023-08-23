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
    'relative items-center px-3 py-2 text-sm font-semibold text-white';

  return (
    <span className="items-center isolate inline-flex rounded-md shadow-sm border-0 00">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`${baseClassNames} ${
            option.value === activeTab ? 'bg-red-600' : 'bg-gray-600'
          }`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </span>
  );
}
