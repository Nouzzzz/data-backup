
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

function Dashboard() {

    const user = useSelector((state) => state.auth.user)
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()

        console.log('Searching for:', search)
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">

            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    Welcome back, {user?.name}!
                </h1>

                <p className="text-gray-400 mt-2">
                    Discover your favourite movies.
                </p>

                {/* Movie Search */}

                <form onSubmit={handleSearch} className="flex gap-3 mt-8">

                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
                    />

                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 px-6 rounded-lg"
                    >
                        Search
                    </button>

                </form>

                {/* Movie Listing */}

                <div className="mt-12">

                    <h2 className="text-2xl font-semibold mb-6">
                        Discover Movies
                    </h2>

                    <div className="text-center py-20 bg-gray-900 rounded-xl">

                        <p className="text-gray-400">
                            Search for movies to see the results here.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dashboard
