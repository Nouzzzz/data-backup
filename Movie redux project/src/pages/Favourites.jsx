
import Navbar from '../components/Navbar'

function Favourites() {

    return (
        <div className="min-h-screen bg-gray-950 text-white">

            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    My Favourites
                </h1>

                <p className="text-gray-400 mt-3">
                    Your favourite movies will appear here.
                </p>

            </div>

        </div>
    )
}

export default Favourites
