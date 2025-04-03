import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx"



function Hobby1() {

    return (
        <div>
            <div className="text-xl float-1 text-accent">
                <h1>Hudson's Hobby: Sking</h1>
                <h3>Its really fun but East coast snow sucks</h3>
            </div>
            {/*demo */}
            <div className="text-xl float-1 text-accent">
                <form>
                    this is a generic form for demonstratoin
                </form>
            </div>
            {/*demo*/}
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
