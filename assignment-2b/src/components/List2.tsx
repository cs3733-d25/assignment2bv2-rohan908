function list2() {
        // More sillly hover effects lolll
    const listItemClass = "flex items-start gap-2 p-2 rounded-md hover:bg-base-300 transition-colors";
    
    return (
        <div className="bg-base-200 rounded-lg p-6 shadow-lg my-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
                Contact me if you want to go snowboarding!
            </h3>
            <h3 className="text-lg font-medium text-secondary mb-3">
                My Favorite Mountains
            </h3>
            <ol className="space-y-3 list-decimal list-inside">
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Mt. Bachelor</span>
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Grand Targhee</span>
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Mammoth Mountain</span>
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Jackson Hole</span>
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Chamonix</span>
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Mt. Killington</span>
                </li>
            </ol>
        </div>
    )
}

export default list2