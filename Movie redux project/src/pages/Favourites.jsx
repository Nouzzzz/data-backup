import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Favourites = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    My Favourites
                </h1>

                <p className={`mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your favourite movies will appear here.
                </p>

                <div className={`mt-8 text-center py-20 rounded-xl ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                }`}>

                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        You haven't added any favourite movies yet.
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Favourites
