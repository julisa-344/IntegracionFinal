export default function LoadingSkeleton() {
    return (
        <div className="animate-pulse max-w-3xl mx-auto space-y-5 bg-white dark:bg-slate-800 p-10 rounded-lg shadow-lg">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mx-auto"></div>
            
            <div className="flex justify-center my-6">
                <div className="h-40 w-40 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            </div>

            <div className="space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
            </div>

            <div className="mt-10 space-y-4">
                 <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                 <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                 <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
            </div>
        </div>
    )
}
