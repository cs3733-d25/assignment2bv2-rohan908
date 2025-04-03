function table1() {
    const tableClass = "table table-zebra w-full bg-base-200 rounded-lg shadow-lg my-6";
    const headerCellClass = "bg-primary text-primary-content font-semibold";
    const cellClass = "text-base-content";
    const captionClass = "text-xl font-semibold text-primary mb-4";
    
    return (
        <div className="p-6">
            <table className={tableClass}>
                <caption className={captionClass}>WPI Cycling Club Races</caption>
                <thead>
                    <tr>
                        <th className={headerCellClass}></th>
                        <th className={headerCellClass}>Road Races</th>
                        <th className={headerCellClass}>Cyclocross Races</th>
                        <th className={headerCellClass}>Mountain Biking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={cellClass}>Season</td>
                        <td className={cellClass}>D Term</td>
                        <td className={cellClass}>A Term</td>
                        <td className={cellClass}>A Term</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Number of Races</td>
                        <td className={cellClass}>3</td>
                        <td className={cellClass}>5</td>
                        <td className={cellClass}>1</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Race Distance</td>
                        <td className={cellClass}>30 Miles</td>
                        <td className={cellClass}>18 Miles</td>
                        <td className={cellClass}>10 Miles</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default table1
