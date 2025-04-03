function table2() {
    const tableClass = "table table-zebra w-full bg-base-200 rounded-lg shadow-lg my-6";
    const headerCellClass = "bg-primary text-primary-content font-semibold";
    const cellClass = "text-base-content";
    const captionClass = "text-xl font-semibold text-primary mb-4";
    
    return (
        <div className="p-6">
            <table className={tableClass}>
                <caption className={captionClass}>Snowboarding Equipment & Stats</caption>
                <thead>
                    <tr>
                        <th className={headerCellClass}>Category</th>
                        <th className={headerCellClass}>About Me</th>
                        <th className={headerCellClass}>Specifications</th>
                        <th className={headerCellClass}>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={cellClass}>Board</td>
                        <td className={cellClass}>K2 Manifest</td>
                        <td className={cellClass}>All-Mountain</td>
                        <td className={cellClass}>Perfect for all conditions</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Bindings</td>
                        <td className={cellClass}>NOW Bindings</td>
                        <td className={cellClass}>Medium Flex</td>
                        <td className={cellClass}>Great response and control</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Boots</td>
                        <td className={cellClass}>Burton Photon</td>
                        <td className={cellClass}>Medium Stiffness</td>
                        <td className={cellClass}>Comfortable all day</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Experience</td>
                        <td className={cellClass}>10+ Years</td>
                        <td className={cellClass}>Advanced</td>
                        <td className={cellClass}>Can ride switch</td>
                    </tr>
                    <tr>
                        <td className={cellClass}>Favorite Terrain</td>
                        <td className={cellClass}>All Types</td>
                        <td className={cellClass}>Park & Powder</td>
                        <td className={cellClass}>Especially love tree runs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default table2
