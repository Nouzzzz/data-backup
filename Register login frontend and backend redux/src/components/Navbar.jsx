import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='px-6 py-4 flex items-center justify-between'>

      <h3>
        {user ? `Welcome, ${user.username}` : 'Navbar'}
      </h3>

      <div className='flex gap-4'>

        {user ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

      </div>

    </div>
  );
};

export default Navbar;
