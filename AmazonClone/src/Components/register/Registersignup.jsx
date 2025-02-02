import React, { useState } from 'react'
import './Registersignup.css'
import axios from 'axios'
import Loader from '../Loader/loader'
import { useNavigate } from 'react-router-dom'


function RegistersignupAdmin({ onLogin }) {
  const [activehtmlForm, setActivehtmlForm] = useState("form active")
  const [inactivehtmlForm, setInactivehtmlForm] = useState(" form")
  const [titlehtmlForm, setTitlehtmlForm] = useState('Login')
  const [loaderStatus, setLoaderStatus]=useState(false)
  const [user,setUser]=useState(null)
  const navigate = useNavigate ();
  
  const [error, setError] = useState('');

  const [userDetails, setUserDetails] = useState({
    name: '',
    price: '',
    email: ''
  });

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
    role: 'user',
  });

  const { name, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoaderStatus(true)
    
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
    setLoaderStatus(false)

  };


  const [formDataLogin, setFormDataLogin] = useState({
    emailLogin: '',
    passwordLogin: '',
    roleLogin: 'user',
  });

  const { emailLogin, passwordLogin, roleLogin } = formDataLogin;

  const onChangeLogin = e => setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });



  const handleLogin = async (e) => {
    e.preventDefault();
    setLoaderStatus(true)
    try {
      const response = await axios.post('http://localhost:4000/login/user', formDataLogin);
      setUser(response.data);
      onLogin(response.data.user);
      alert('login success')
       
      
      
      

      navigate('/home', { state:  response.data });
      
    } catch (err) {
      setError(  'Invalid email or password');
    }
    setLoaderStatus(false)
    
  };
  const handleLogout = async () => {
    await axios.post('/api/logout');  
    setUser(null);
};




  return (
    <div className="Container">
      <div className="form-container">
        <div className="form-header">
          <h2 id="htmlFormTitle"> {titlehtmlForm}</h2>
        </div>

        {loaderStatus && <Loader/>}
        <form id="loginhtmlForm " className={activehtmlForm} onSubmit={handleLogin}>
          <label htmlFor="loginEmail">Email</label>
          <input type="email" id="loginEmail" name='emailLogin' value={emailLogin} onChange={onChangeLogin} required />
          <label htmlFor="loginPassword">Password</label>
          <input type="password" name='passwordLogin' value={passwordLogin}
            onChange={onChangeLogin} id="loginPassword" required />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className='btnn'>Login</button>
          {user && <div>Welcome, {user.name}</div>}
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


export default RegistersignupAdmin
