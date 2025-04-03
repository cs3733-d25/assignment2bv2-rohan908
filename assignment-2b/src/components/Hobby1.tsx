import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx"
import Form1 from "./Form1.tsx";


function Hobby1() {

    return (
        <>
            <div className="card bg-base-300 shadow-xl p-6 max-w-2xl mx-auto my-8 hover:bg-base-200">
                <div className="card-body">
                    <div className="text-xl float-1 text-accent">
                        <h1>Hudson's Hobby: Biking</h1>
                    </div>
                    <figure>
                        <img
                            src="../../public/IMG_9063.jpg"
                            alt="Hudson biking" />
                    </figure>
                </div>
            </div>
            <List1 />
            <Table1 />
            <Form1 />

        </>

    );
}

export default Hobby1
