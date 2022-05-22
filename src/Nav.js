import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
//          <div className="ui stackable menu">
//            <div className="item">
//     {/* <img src="/images/logo.png"> */}
//   </div> 
  
//             <NavLink to="Study" className="item">STUDY CERTIFICATE</NavLink>
//              <NavLink to="Custodian" className="item">CUSTODIAN CERTIFICATE</NavLink>
//             <NavLink to="Fee" className="item">FEE ESTIMATION CERTIFICATE</NavLink>
//             <NavLink to="Concern" className="item">TO WHOMSOEVER IT MAY CONCERN</NavLink>
//             <NavLink to="Residence" className="item">RESIDENCE CERTIFICATE</NavLink>
//              <NavLink to="Internship" className="item">INTERNSHIP DURATION CERTIFICATE</NavLink>
//  </div>,
 <div>
       <div className="ui inverted menu">
       {/* <div className="ui secondary pointing menu"> */}
       {/* <div className="ui sidebar inverted vertical menu"> */}
             <NavLink to="Study"      className="item">STUDY CERTIFICATE          </NavLink>
             <NavLink to="Custodian"  className="item">CUSTODIAN CERTIFICATE      </NavLink>
             <NavLink to="Fee"        className="item">FEE  ESTIMATION             </NavLink>
             <NavLink to="Concern"    className="item">TO WHOMSOEVER IT MAY CONCERN</NavLink>
             <NavLink to="Residence"  className="item">RESIDENCE CERTIFICATE       </NavLink>
             <NavLink to="Internship" className="item">INTERNSHIP DURATION         </NavLink>
             <NavLink to="Conduct"    className="item">STUDY AND CONDUCT           </NavLink>
      </div>
      </div> 
    );
};

export default Nav;