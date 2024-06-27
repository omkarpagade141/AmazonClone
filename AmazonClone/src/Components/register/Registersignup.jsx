import React, { useState } from 'react'
import './Registersignup.css'
import axios from 'axios'


function Registersignup() {
  const [activehtmlForm, setActivehtmlForm] = useState("form active")
  const [inactivehtmlForm, setInactivehtmlForm] = useState(" form")
  const [titlehtmlForm, setTitlehtmlForm] = useState('Login')

  function changeActivehtmlForm() {
    setActivehtmlForm("form")
    setInactivehtmlForm("form active")
    setTitlehtmlForm('Register')

  }
  function changeActivehtmlFormm() {
    setActivehtmlForm("form active")
    setInactivehtmlForm("form  ")
    setTitlehtmlForm('Login')

  }

   
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      role: 'admin',
    });

    const { name, email, password, role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4000/register', formData);
        if (response.status === 200) {
          alert('Registration Successful...')
  
        } else {
          alert('Registration failed')
        }
        console.log(response.data);  
      } catch (err) {
        console.log("Error occurred:", err);
        alert('Registration failed !!')
      }
    };




    return (
      <div className="Container">
        <div className="form-container">
          <div className="form-header">
            <h2 id="htmlFormTitle"> {titlehtmlForm}</h2>
          </div>


          <form id="loginhtmlForm " className={activehtmlForm} action="/userlogin" method="post">
            <label htmlFor="loginEmail">Email</label>
            <input type="email" id="loginEmail" required />
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" required />
            <button type="submit" className='btnn'>Login</button>
            <p className="form-switch">Don't have an account? <span onClick={() => { changeActivehtmlForm() }}>Register</span></p>
          </form>



          <form id="registerhtmlForm" className={inactivehtmlForm} onSubmit={onSubmit}>
            <label htmlFor="registerName">Name</label>
            <input type="text" name="name" value={name} onChange={onChange} id="registerName" required />
            <label htmlFor="registerEmail">Email</label>
            <input type="email" name="email" value={email} onChange={onChange} id="registerEmail" required />
            <label htmlFor="registerPassword">Password</label>
            <input type="password" name="password" value={password} onChange={onChange} id="registerPassword" required />
            <button type="submit" className='btnn'>Register</button>
            <p className="form-switch">Already have an account? <span onClick={() => { changeActivehtmlFormm() }}>Login</span></p>
          </form>
        </div>
      </div>
    )
  }


export default Registersignup
