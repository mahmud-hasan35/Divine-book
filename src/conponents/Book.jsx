import { FaShoppingCart, FaMoon, FaSun, FaBell } from 'react-icons/fa';



const Header = ({ darkMode, toggleDarkMode, notifications }) => (
  <div className={`border-b ${darkMode ? 'border-gray-600 bg-gray-900' : 'border-gray-300 bg-gray-100'} p-4 flex items-center justify-between`}>
    <h1 className={`text-2xl font-bold ${darkMode ? 'text-green-500' : 'text-green-700'}`}>DivineBook</h1>
    <div className="flex space-x-4">
      <div className="border p-2 rounded cursor-pointer">
        <FaShoppingCart className={`${darkMode ? 'text-white' : 'text-gray-700'}`} />
      </div>
      <div onClick={toggleDarkMode} className="border p-2 rounded cursor-pointer">
        {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
      </div>
      <div className="border p-2 rounded cursor-pointer relative">
        <FaBell className={`${darkMode ? 'text-white' : 'text-gray-700'}`} />
        {notifications > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {notifications}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Sidebar = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} p-4 w-64 h-full border border-gray-600`}>
    <input
      type="text"
      placeholder="Quick search..."
      className={`w-full p-2 mb-4 ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'} rounded border border-gray-500`}
    />
    <ul className="space-y-4">
      <li className="flex items-center space-x-2 text-green-500">
        <span>🔥</span>
        <span>Trending</span>
      </li>
      <li className="flex items-center space-x-2">
        <span>📦</span>
        <span>New Releases</span>
      </li>
      <li className="flex items-center space-x-2">
        <span>⏳</span>
        <span>Coming Soon</span>
      </li>
      <li className="flex items-center space-x-2">
        <span>❤️</span>
        <span>Favorites</span>
      </li>
    </ul>
  </div>
);

const BookCard = ({ book, darkMode }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} p-4 rounded-lg shadow-lg border w-60 relative`}>
      <img src={book.image} alt={book.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{book.name}</h3>
      <p className="text-sm">{book.author}</p>
      <p className="text-xs mt-1">{book.description}</p>
      <div className="flex items-center mt-2 space-x-1">
        {[...Array(book.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {[...Array(5 - book.rating)].map((_, i) => (
          <span key={i} className="text-gray-500">★</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button className="bg-green-500 px-4 py-1 rounded text-sm flex items-center space-x-2">
          <span>❤️</span>
          <span>${book.price}</span>
          <span>| Add to cart</span>
        </button>
      </div>
      <button onClick={() => setLiked(!liked)} className="absolute top-4 right-4 text-2xl">
        <span className={liked ? 'text-red-500' : 'text-gray-400'}>♥</span>
      </button>
    </div>
  );
};

const BookList = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const books = [
    {
      id: "01",
      name: "The Blacked Hunter",
      image: "1.jpg",
      rating: 3,
      price: 150,
      author: "John Doe",
      description: "A thrilling story of courage, loss, and survival.",
      status: "new_releases"
    },
    // ...other book data
  ];

  return (
    <div className={`h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} notifications={notifications} />
      <div className="flex h-full">
        <Sidebar darkMode={darkMode} />
        <div className="flex-1 p-4 border-l">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map(book => (
              <BookCard key={book.id} book={book} darkMode={darkMode} />
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-800 text-white w-48 border-l">
          <h3 className="text-lg font-bold mb-2">Filter On Page</h3>
          <ul>
          <li>By name</li>
         <li>By rating</li>
         <li>By price</li>
          </ul>
          {/* Filter section content */}
        </div>
      </div>
    </div>
  );
};

export default BookList;
