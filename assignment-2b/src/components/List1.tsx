import "../list.css"

function list1() {

    return (
        <div data-theme="customLight" className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto my-8 hover:bg-base-200">
            <div className="card-body">
                <h3 className="text-2xl font-bold text-primary mb-4">
                    Interested in cycling? Join the WPI Cycling Club!
                </h3>

                <div className="divider"></div>

                <h3 className="text-xl font-semibold mb-4">
                    Services Provided by Cycling Club:
                </h3>

                <ol className="space-y-3">
                    <li className="flex items-start">
                        <span className="badge badge-primary mr-3 mt-1">1</span>
                        <span className="text-lg">Regular Group Rides for Road and Mountain bike trails</span>
                    </li>
                    <li className="flex items-start">
                        <span className="badge badge-primary mr-3 mt-1">2</span>
                        <span className="text-lg">Option to race competitively across Massachusetts</span>
                    </li>
                    <li className="flex items-start">
                        <span className="badge badge-primary mr-3 mt-1">3</span>
                        <span className="text-lg">Cycling coach who can offer personalized training plans</span>
                    </li>
                    <li className="flex items-start">
                        <span className="badge badge-primary mr-3 mt-1">4</span>
                        <span className="text-lg">Bike wash events</span>
                    </li>
                    <li className="flex items-start">
                        <span className="badge badge-primary mr-3 mt-1">5</span>
                        <span className="text-lg">Shared tools to fix and maintain your bike</span>
                    </li>
                </ol>

                <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default list1
