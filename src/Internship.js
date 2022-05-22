import React from 'react';
import { useNavigate } from 'react-router-dom';

const Internship = () => {
    const nav=useNavigate();
    const submit=()=>
    {
        nav('Interncert')
    }
    return (
        <div>
            <div className="main">
            <div className="form">
                <table className="logo">
                    <tr>
                        <td>
                    <img src="https://img.collegedekhocdn.com/media/img/institute/logo/Vishnu_Universal_Learning.png" width="100" height="105" alt="" /></td>
                    <td>
                    <b>
                        SHRI VISHNU DENTAL <p align="center"> COLLEGE</p>
                    </b>
                    </td>
                    </tr>
                </table>

                <div class="ui form">
                    <div className="inline field">
                        <label>Register num </label>
                        <input type="text" placeholder="register number" />
                    </div>
                    <div className="inline field">
                        <label>Year of study </label>
                        <input type="text" placeholder="year" />
                    </div> 
                    <button className="ui button" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Internship;