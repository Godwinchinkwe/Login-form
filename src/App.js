import React, {useState} from 'react'
import "./App.css"
import FormInput from './Components/FormInput'
// import SignUp from './Components/SignUp'
// import FormInput from './Components/FormInput'



function App() {
const [value, setValues] = useState({
  name: "",
  email: "",
  address: "",
  password:"",
  confirmPassword: "",
})

const inputs = [{
  id:1,
  placeholder: "user Name",
  type: "text",
  name: "Username",
  value: value.name,
  errMsg: "it has to be at least 4 characters and not more than 20 characters",
  required: true
},
{
  id:2,
  placeholder: "email",
  type: "text",
  name:"Email",
  value: value.email,
  errMsg: "must be a valid email",
  required: true
},
{
  id:3,
  placeholder: "Address",
  type: "number",
  name:"Address",
  value: value.address,
  required: true
},
{
  id:4,
  placeholder: "Password",
  type: "text",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true
},
{
  id:5,
  placeholder: "confirm password",
  type: "text",
  name:"Confirm password",
  value: value.confirmPassword,
  errMsg: "it has to match password",
  required: true
},]

const handChange=(e)=>{
  setValues({...value, [e.target.name]:e.target.value})
}

   

  return (
    <main className="App">
      <form className="form">
        <h3>Sign Up</h3>
        {inputs.map((i)=>
        <FormInput key={i.id} {...i} handChange={handChange}/>
        )}
        <button>Submit</button>
        </form>
    

    </main>
  )
}

export default App