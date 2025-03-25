/*
------------------------------------------------------------
  1. useState() is a hook that allows you to have state variables in functional components. 
  2. useState() returns an array with two elements. The first element is the current value of the state, and the second element is a state setter function.
  3. The initial value of the state is passed as an argument to useState().
  4. The state setter function is used to update the state.
  5. The state setter function does not automatically merge the new state with the existing state.    
------------------------------------------------------------
In React, the useState Hook allows you to add state to functional 
components, enabling you to manage data that changes over time and
trigger re-renders when that data updates
*/

// import React from "react";
// import { useState } from "react";
// function App() { 
//   //let name = "Kshitiz";
//   const [monitor,remote] = useState("MOHAN"); // monitor is the state variable and remote is the state setter function
//   console.log("re render",monitor);
//   const handleChange = (e) => {
//     // name = e.target.value;
//     // console.log(name);
//     remote(e.target.value.toUpperCase()); // remote() is used to update the state
//     console.log("updated",monitor); // monitor is the current value of the state
//   }
//   return (
//     <div className="App">
//       <h1>Name</h1>
//       <input value={monitor} placeholder="Please enter your name.." onChange={handleChange} />
//       <h3>Hello {monitor} !</h3>  
//     </div>
//   );
// }

/*
**************************************************************************************************************************
In React, one-way data binding means data flows from the parent to child components through props, while two-way data 
binding allows bidirectional data flow, where changes in the UI update the component's state and vice versa
**************************************************************************************************************************
*/
// export default App;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Assignment:
Create a registration form with the following fields: 
1. Name
2. Email
3. Password
When the user submits the form, display the entered information below the form.
Use the useState() hook to manage the form data and submitted state.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
import React, { useState } from "react";
import './App.css';

function App() { 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              placeholder="Please enter your name.." 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              placeholder="Please enter your email.." 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              placeholder="Enter your password"
              onChange={handleChange} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="card">
          <h3>User Information</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;