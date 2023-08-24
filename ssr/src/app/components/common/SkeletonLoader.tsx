interface SkeletonLoaderProps {
  count: number;
}

export function SkeletonLoader({ count }: SkeletonLoaderProps) {
  return (
    <div>
      {[...Array(count).keys()].map((key) => (
        <Loader key={`loader-${key}`} />
      ))}
    </div>
  );
}

function Loader() {
  return (
    <div className="border border-red-100 shadow rounded-md my-4 p-4 max-w-2xl">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-20"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
