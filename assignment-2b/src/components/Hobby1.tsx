import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx"



function Hobby1() {

    return (
        <div>
            <div className="text-xl float-1 text-accent">
                <h1>Hudson's Hobby: Biking</h1>
            </div>

            <figure>
                <img
                    src="../../public/IMG_9063.jpg"
                    alt="Hudson biking" />
            </figure>
            <List1 />
            <Table1 />

        </div>

    )
}

export default Hobby1
