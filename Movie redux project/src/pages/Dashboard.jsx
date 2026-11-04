
import { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext'

function Dashboard() {

    const user = useSelector((state) => state.auth.user)
    const { darkMode } = useContext(ThemeContext)

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()

        console.log('Searching for:', search)
    }

    return (
        <div className={`min-h-screen ${
            darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
        }`}>

            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    Welcome back, {user?.name}!
                </h1>

                <p className={`mt-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    Discover your favourite movies.
                </p>

                <form onSubmit={handleSearch} className="flex gap-3 mt-8">

                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`flex-1 border rounded-lg px-4 py-3 outline-none focus:border-red-500 ${
                            darkMode
                                ? 'bg-gray-900 border-gray-700 text-white'
                                : 'bg-white border-gray-300 text-gray-900'
                        }`}
                    />

                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-lg"
                    >
                        Search
                    </button>

                </form>

                <div className="mt-12">

                    <h2 className="text-2xl font-semibold mb-6">
                        Discover Movies
                    </h2>

                    <div className={`text-center py-20 rounded-xl ${
                        darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}>

                        <p className={
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }>
                            Search for movies to see the results here.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dashboard
