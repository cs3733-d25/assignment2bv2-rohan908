import List2 from "./List2.tsx";
import Table2 from "./Table2.tsx"
import Form2 from "./Form2.tsx"



function Hobby2() {

    return (
        <div className="space-y-6">
            <div className="text-2xl font-bold text-accent text-center mb-6">
                <h1>Rohan's Hobby: Snowboarding</h1>
            </div>

            <figure className="max-w-3xl mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                        src="../../public/image.jpg"
                        alt="Rohan Snowboarding"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                    //silly hover darken lol
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
            </figure>
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    )
}

export default Hobby2
