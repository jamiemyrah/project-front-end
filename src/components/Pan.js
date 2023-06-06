import React from 'react'
import { useNavigate } from 'react-router-dom';
import Start from './Start';


function Pan() {
  const navigate = useNavigate();
  return (
    <div className='pan '>
      <div className="container ">
        <div className=" do">
      <div className="com">
            <h4 className='text-white'>ODYSSEY TECH</h4>
          </div>
        <nav className='nil'>
          
            <div className="navicon  ">
            
            <div className='lit '>
               <h6 className='pt-4 d-flex'>Admin Dashboard</h6>
               <a href='pan' className='lin py-2'>Dashboard</a>
               <a href='pan' className='lin'>Admin</a>
                <a href='pan' className='lin'>Super admin</a>
                </div> 
              </div>
          </nav>
        </div>
        <div className="d-lg-flex d-md-block d-sm-block justify-content-between align-items-center mb-5">
          <div className="d-block">
        <div className="mas">
          <h1 className='text-white'>We bring the services <br />to the final destinaton</h1>
          <p className='text-white py-2'>We are specialist in content creating, web designing, content marketing,<br/>
            Graphic designing, web developing and other related tech services</p>
        </div>
        <div className="ones d-flex">
          <button onClick={() => navigate('/Register') } className='gan btn-white'>connect with us</button>
          <button onClick={() => navigate('/')} className='gad btn-white mx-3'>sign in</button>
            </div>
            </div>
          <Start/>
        </div>
        
        </div>
      </div>
  );
};

export default Pan;
