import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input 
          type="text"
          value={name}
          onChange = {(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App


// Two-Way Binding in React
// Ear ko sidha pakdo ya ghuma kr pakdo, dono tarike se pakad lega.
// 1. Input field me jo bhi type karoge, wo state me chala jayega.
// 2. State me jo bhi value hogi, wo input field me reflect hogi.
// Isse kehte hain Two-Way Binding.
// matlab phle input field se onChange aur useState ki madad se state me value jati hai, fir state se input field me value aati hai.