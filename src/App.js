
import React from 'react';
import { Route,Routes} from 'react-router-dom';
// import Routes from 'react-router-dom'
import Concern from './Concern';
import Custodian from './Custodian';
import Internship from './Internship';
import Study from './Study';
import Residence from './Residence';
import Fee from './Fee';
import Nav from './Nav';
import Conduct from './Conduct';
import Studycert from './Studycert';
import Custdoiancert from './Custdoiancert';
import Towhomcert from './Towhomcert';
import Interncert from './Interncert';
import Residencecert from './Residencecert';
import Studyconductcert from './Studyconductcert';
import Feecert from './Feecert';
const App = () => {
    return (
        <div>
            <Nav/>
           <Routes>
               <Route path="study" element={<Study/>}>
              
               </Route>
               <Route path="Concern" element={<Concern/>} />
               <Route path="Fee"   element={<Fee/>}/>
               <Route path="Internship" element={<Internship/>}/>
               <Route path="Residence" element={<Residence/>}/>
               <Route path="Custodian" element={<Custodian/>}/>
               <Route path="Conduct"   element={<Conduct/>}/>
               <Route path="study/Studycert"  element={<Studycert/>}/>
               <Route path="Custodian/Custdoiancert" element={<Custdoiancert/>}/>
               <Route path="Concern/Towhomcert" element={<Towhomcert/>} />
               <Route path="Internship/Interncert" element={<Interncert/>}/>
               <Route path="Residence/Residencecert" element={<Residencecert/>}/>
               <Route path="Conduct/Studyconductcert" element={<Studyconductcert/>}/>
            <Route path="Fee/Feecert" element={<Feecert/>}/>
               </Routes> 
        </div>
    );
};

export default App;