import React, {useState} from 'react';
import axios from "axios";

const Auth = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const url = 'https://freegeoip.app/json/';

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () { console.log(this.responseText); });
    oReq.open("GET", "https://freegeoip.app/json/?ip=161.185.160.93");
    oReq.setRequestHeader("apikey", "D9Rcr0J03cAOQIasVXf80wJFGKq01FttiAQnTbMZ");
    oReq.send();
    console.log(oReq);

    return (
        <section>
            <h2 className='text-center'>post request</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        email
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-block'>
                    login
                </button>
            </form>
        </section>
    );
};
export default Auth;
