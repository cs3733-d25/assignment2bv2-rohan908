function list1() {
    // More sillly hover effects lolll
    const listItemClass = "flex items-start gap-2 p-2 rounded-md hover:bg-base-300 transition-colors";
    
    return (
        <div className="bg-base-200 rounded-lg p-6 shadow-lg my-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
                If you are interested in cycling, please join the WPI Cycling Club!
            </h3>
            <h3 className="text-lg font-medium text-secondary mb-3">
                Services Provided by cycling club:
            </h3>
            <ol className="space-y-3 list-decimal list-inside">
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Regular Group Rides</span> for Road and Mountain bike trails
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Competitive Racing</span> across Massachusetts
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Personalized Training</span> with a dedicated cycling coach
                </li>
                <li className={listItemClass}>
                    <span className="text-accent font-medium">Bike Maintenance</span> including wash events and shared tools
                </li>
            </ol>
        </div>
    )
}

export default list1
