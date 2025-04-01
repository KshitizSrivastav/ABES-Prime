/*
---------------------------------------------------------------------------------------------------------------------------------------------------
In React, controlled components manage their values using React state, while uncontrolled components rely on the DOM to manage their 
values, offering flexibility and simplicity, but potentially sacrificing predictability. 
Controlled Components:
State Management:
React state manages the form data, and the component's state is updated using setState. 
Value Attribute:
The value attribute of the input element is bound to the React state, ensuring that the component's state always reflects the current value of the input. 
Event Handling:
An event handler (e.g., onChange) is used to update the React state when the input value changes. 
Predictability:
Controlled components are more predictable because the component's state is always the source of truth. 
Validation:
You can perform validation on each keystroke, as the form component values are securely stored in local state. 
Use Cases:
Suitable for complex forms, dynamic forms, and when you need tight control over the data. 
**********************************************************************************************************************************************************************************************
Uncontrolled Components:
DOM Management:
The DOM handles the form data, and the component uses ref to access the DOM element's value. 
No Value Attribute:
The value attribute is not used, and instead, you can use defaultValue or leave it out entirely. 
Event Handling:
While you can still use event handlers, the component doesn't directly manage the state of the input element. 
Simplicity:
Uncontrolled components are simpler to implement, especially for basic forms. 
Flexibility:
They offer more flexibility in terms of integration with existing DOM elements or libraries. 
Validation:
Validation is typically performed after form submission, as the component doesn't have immediate access to the input value. 
Use Cases:
Suitable for simpler forms, rapid prototyping, or when you want to minimize React's involvement. 
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/


/*
---------------------------------Controlled Component---------------------------------
import React, { useState } from "react";
import './App.css';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [formData, setFormData] = useState({ name: "", email: "" }); // State to track name and email

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the corresponding field
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Set the state to true when the form is submitted
  };

  return (
    <div>
      {!isSubmitted && ( // Conditionally render the form section
        <section>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type here...."
            ></input>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type here...."
            ></input>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </section>
      )}
      {isSubmitted && ( // Conditionally render the success message
        <section>
          <h2>Successfully Registered</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </section>
      )}
    </div>
  );
};

export default App;

*/

//---------------------------------Uncontrolled Component---------------------------------
import React, { useRef, useState } from "react";
import './App.css';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [submittedData, setSubmittedData] = useState({}); // State to store submitted data
  /*The useRef hook in React allows you to create a mutable reference to a value that persists across renders without 
   causing re-renders when updated, useful for accessing DOM elements or storing values that don't directly affect the UI. */
  const nameRef = useRef(); // Ref for the name input
  const emailRef = useRef(); // Ref for the email input

  const handleSubmit = () => {
    // Retrieve values from the input fields using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // Store the submitted data
    setSubmittedData({ name, email });

    // Set the state to true to show the success message
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted && ( // Conditionally render the form section
        <section>
          <div>
            <label>Name</label>
            <input
              ref={nameRef} // Attach the ref to the input
              placeholder="Type here...."
            ></input>
            <label>Email</label>
            <input
              ref={emailRef} // Attach the ref to the input
              placeholder="Type here...."
            ></input>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </section>
      )}
      {isSubmitted && ( // Conditionally render the success message
        <section>
          <h2>Successfully Registered</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </section>
      )}
    </div>
  );
};

export default App;