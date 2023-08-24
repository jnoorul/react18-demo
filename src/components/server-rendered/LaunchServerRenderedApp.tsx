import { ServerStackIcon } from '@heroicons/react/20/solid';

export function LaunchServerRenderedApp() {
  return (
    <div className="fixed -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
      <a
        href={'http://localhost:3000/'}
        target="_blank"
        rel="noreferrer"
        className="border-red-600 text-red-600 group inline-flex items-center border-2 py-4 px-2 text-sm font-medium"
      >
        <ServerStackIcon
          className={'text-red-600 -ml-0.5 mr-2 h-5 w-5'}
          aria-hidden="true"
        />
        <span>Launch Server Rendered App</span>
      </a>
    </div>
  );
}
