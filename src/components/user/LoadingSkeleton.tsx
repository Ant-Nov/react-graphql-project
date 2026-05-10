import { Skeleton } from "../ui/skeleton"

const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton  className="md:max-w-[50%] mb-8 h-40 mt-8"/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Skeleton className="h-13" />
        <Skeleton className="h-13" />
        <Skeleton className="h-13" />
        <Skeleton className="h-13" />
      </div>

      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 grid">
        <Skeleton className="min-h-50 w-full" />
        <Skeleton className="min-h-50 w-full" />
        <Skeleton className="min-h-50 w-full" />
      </div>
    </div>
  )
}
export default LoadingSkeleton