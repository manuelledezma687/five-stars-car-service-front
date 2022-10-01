import React from 'react';
import '../styles/Form.scss';
import pointer  from '../assets/icons/point.svg';
import calendar  from '../assets/icons/calendar.svg';
import time  from '../assets/icons/clock.svg';

const Form = () => {
    return (
        <div className='main-form'>
            <h1 className='title'>Quote your trip and book with us, to live the <span> best experience.</span>Just in time with <span>FiveStars.</span></h1>
            <form action="" className='form'>
                <div className="select-type">
                    <button className="select-travel">One Way</button>
                    <button className="select-travel">By the hour</button>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">From</label>
                    <div className="icon-input">
                        <img src={pointer} className="icon" alt="" />
                        <input type="text" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">To</label>
                    <div className="icon-input">
                        <img src={pointer} className="icon" alt="" />
                        <input type="text" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">Date</label>
                    <div className="icon-input">
                        <img src={calendar}className="icon" alt="" />
                        <input type="date" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">Time</label>
                    <div className="icon-input">
                        <img src={time}className="icon" alt="" />
                        <input type="time" placeholder="Address Airport"/>
                    </div>
                </div>
                <button className="send-form">Enviar formulario</button>
            </form>

        </div>
    );
}
export default Form;