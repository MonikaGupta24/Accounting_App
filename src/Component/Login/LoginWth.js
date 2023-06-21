import React, { useState } from "react";
import  './LoginWth.css';
import BodyBG from '../../Assets/bg.jpg';
const LoginWth = () => {

  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
    console.log(tabNumber);
  };

  const handleClickUser = (e) => {
    setUserId(e.target.value);
  };
  const handleClickPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data
    const userData = userId;
    const userPassword = password;

    // console value
    console.log('User ID:', userData);
    console.log('Password:', userPassword);
    

    // Reset
    setUserId('');
    setPassword('');
  }
   
  return (

    // {Main Div}
    <div className="bg-info d-flex justify-content-center  align-items-center vh-100" style={{ backgroundImage: `url(${BodyBG})`,  backgroundSize: 'cover'}}>
      <div
        className=" card bg-transparent   p-5 rounded-3 justify-content-center kaushik"
        style={{ width:  " 25 rem" , opacity:'100%' , height: "30rem", display: 'grid', placeItems: 'center', boxShadow:'16px 15px 41px 3px rgba(0,0,0,0.62)'}}
      >
{/* Tab List*/}
<div className="nav">
<ul className="nav nav-pills nav-justified nav-tabs custom-nav-tabs" role='tablist' style={{ width: "23rem", marginLeft: "-0.3rem" , cursor:'pointer' }}>
  <li className="nav-item text-center" style={{ width: '33%' }}>
    <a className ={`nav-link ${activeTab === 1 ? 'active' : ''} text-black fw-bold `} 
      data-toggle ='tab'
      aria-selected ={activeTab === 1}
      onClick={() => handleClick(1)}
     >
      <b className="text-white" style={{fontWeight:'800'}}>Deposit</b>
    </a>
  </li>
  <li className="nav-item text-center" style={{ width: '33%' }}>
    <a className={`nav-link ${activeTab === 2 ? 'active' : ''} text-black fw-bold`}
      data-toggle ='tab'
      aria-selected ={activeTab === 2}
      onClick={() => handleClick(2)}
    >
      <b className="text-white" >Widthdraw</b>
    </a>
  </li>
  <li className="nav-item text-center" style={{ width: '33%' }}>
    <a className ={`nav-link ${activeTab === 3 ? 'active' : ''} text-black fw-bold`}
      data-toggle ='tab'
      aria-selected ={activeTab === 3}
      onClick={() => handleClick(3)}
    >
      <b className="text-white">Admin</b>
    </a>
  </li>
</ul>
</div>

<span className="input-group-text px-2" style={{ background: 'linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)' }}>
  {activeTab === 1 && <i className="fas fa-coins" style={{ fontSize: '24px', height: '100%', display: 'flex', alignItems: 'center' }}></i>}
  {activeTab === 2 && <i className="fas fa-money-check" style={{ fontSize: '24px', height: '100%', display: 'flex', alignItems: 'center' }}></i>}
  {activeTab === 3 && <i className="fas fa-user-shield" style={{ fontSize: '24px', height: '100%', display: 'flex', alignItems: 'center' }}></i>}
</span>


      
        <form style={{ width: '18rem' }}>
  {/* UID input group */}
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text px-2" style={{ background: 'linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)'}}>
        <i className="fas fa-user" style={{ height: '100%', display: 'flex', alignItems: 'center' }}></i>
      </span>
    </div>
    <input
      type="text"
      placeholder="User id"
      className="form-control"
      id="userId"
      onChange={handleClickUser}
    />
  </div>

  {/* Password input group */}
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text px-2" style={{ background: 'linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)'}}>
        <i className="fas fa-lock" style={{ height: '100%', display: 'flex', alignItems: 'center' }}></i>
      </span>
    </div>
    <input
      type="password"
      placeholder="Password"
      className="form-control"
      id="password"
      onChange={handleClickPassword}
    />
  </div>

  {/* Submit button */}
  <div style={{ marginBottom: '2rem' }}>
    <input
      type="submit"
      className="btn form-control fw-bolder text-white"
      value={"Log In"}
      style={{
        background: 'linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)',
      }}
      onMouseOver={(e) => {
        e.target.style.background = 'linear-gradient(90deg, rgba(218,8,8,1) 0%, rgba(245,244,218,1) 97%)';
      }}
      onMouseOut={(e) => {
        e.target.style.background = 'linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)';
      }}
      onClick={handleSubmit}
    />
  </div>
</form>
      </div>
    </div>
  );
};

export default LoginWth;