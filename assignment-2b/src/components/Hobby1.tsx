import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx"

function Hobby1() {
    return (
        <div className="space-y-6">
            <div className="text-2xl font-bold text-accent text-center mb-6">
                <h1>Hudson's Hobby: Biking</h1>
            </div>

            <figure className="max-w-3xl mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                        src="../../public/IMG_9063.jpg"
                        alt="Hudson biking"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                    //silly hover darken lol
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div> 
            </figure>
            <List1 />
            <Table1 />
        </div>
    )
}

export default Hobby1
