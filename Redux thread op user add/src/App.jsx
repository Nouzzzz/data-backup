import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { adduser, deleteuser, edituser } from './features/UserSlice';

const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const { users } = useSelector((x) => x.users);
  const [editId, SetEditId] = useState(null)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleEdit = (user) => {
    setData(user.name);
    SetEditId(user.id)
  }

  const handleSubmit = () => {

    if (data === "") return

    if (editId !== null) {
      dispatch(edituser({
        id: editId,
        name: data
      }))

      SetEditId(null)

    } else {
      dispatch(adduser(data))
    }

    setData("");
  }

  return (
    <div className="p-3 flex flex-col gap-3 ">
      {users.map((x) => (
        <div key={x.id} className="flex flex-col gap-2">
          <p className="text-xl">{x.name}</p>

        <div className='flex gap-2 flex-row mr-auto '>
           <button className="mr-auto bg-blue-600 rounded px-2 py-1 text-white"
            onClick={() => handleEdit(x)}>
            Edit
          </button>

          <button className="mr-auto bg-red-600 rounded px-2 py-1 text-white"
            onClick={() => dispatch(deleteuser(x.id))}>
            Delete
          </button>
        </div>
         
        </div>
      ))}

      <input className="shadow-md flex p-3 m-auto" value={data} onChange={(e) => setData(e.target.value)} type="text" placeholder="Enter name to add" />

      <button className="bg-green-600 rounded flex m-auto px-2 py-1 text-white"
        onClick={handleSubmit}>
        {editId !== null ? "Update user" : "Add user"}
      </button>
    </div>
  );
};

export default App;