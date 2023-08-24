'use client';

import {
  ArrowPathIcon,
  Cog6ToothIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  { name: 'Batching', href: '/batching', icon: Cog6ToothIcon },
  { name: 'Use Transition', href: '/transition', icon: ArrowPathIcon },
  {
    name: 'Use Deferred',
    href: '/deferred',
    icon: ArrowPathRoundedSquareIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function MenuBar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(tabs[0].href);

  function handleMenuChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    const newPath = event.currentTarget.pathname;
    setActiveMenu(newPath);
    router.push(newPath);
    event.preventDefault();
  }

  return (
    <div>
      <div className="sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-indigo-600"
          defaultValue={tabs[0].name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px ml-12 flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={handleMenuChange}
                className={classNames(
                  activeMenu === tab.href
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 py-4 text-sm font-medium'
                )}
              >
                <tab.icon
                  className={classNames(
                    activeMenu === tab.href
                      ? 'text-red-600'
                      : 'text-gray-400 group-hover:text-gray-600',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
