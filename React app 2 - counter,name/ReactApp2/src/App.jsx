// import { useState } from "react";
// import "./App.css";

// const App = () => {
  
//   const [users, setusers] = useState([
//     { id: 1, name: "Naz" },
//     { id: 2, name: "adhi" },
//     { id: 3, name: "pavi" }
//   ]);

//   return (
//     <div>
     
//       {users.map((user) => (
//         <div key={user.id}>
//           {user.name}
//         </div>


        
//       ))}
//     </div>
//   );
// };

// export default App;






import { useState } from "react";
import "./App.css"

const App = () => {

  const [number, setstate] = useState(0);


  const increment = () => {
    setstate(number + 10);
  };

  const decrement = () => {
    setstate(number - 10);
  }

  const resetval = () => {
    setstate(0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <h1>{number}</h1>


      <div className="innercontainer">
        <button className="plusbtn" onClick={increment}>+</button>

        <button className="minusbtn" onClick={decrement}>-</button>
      </div>

      <button className="resetbtn" onClick={resetval}>Reset</button>
    </div>
  );
};



export default App;
