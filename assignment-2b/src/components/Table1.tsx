function table1() {

    return (
        <div data-theme="goblinpenguin" className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto my-8 hover:bg-base-200">
            <div className="card-body">
                <div className="overflow-x-auto rounded-box border-3 border-base-content/5 bg-base-100">
                    <table className="table">
                        <caption>WPI Cycling Club Races</caption>
                        <tr>
                            <td></td>
                            <td>Road Races</td>
                            <td>Cyclocross Races</td>
                            <td>Mountain Biking</td>
                        </tr>
                        <tr>
                            <td>Season</td>
                            <td>D Term</td>
                            <td>A Term</td>
                            <td>A Term</td>
                        </tr>
                        <tr>
                            <td>Number of Races</td>
                            <td>3</td>
                            <td>5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Race Distance</td>
                            <td>30 Miles</td>
                            <td>18 Miles</td>
                            <td>10 Miles</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default table1
