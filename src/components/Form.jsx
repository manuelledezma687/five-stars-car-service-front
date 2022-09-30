import React from 'react';
import '../styles/Form.scss';

const Form = () => {
    return (
        <div >
            <h1 className='title'>Quote your trip and book with us, to live the best experience.</h1>
            <form action="" className='form'>
                <div className="select-type">
                    <button className="select-travel">One Way</button>
                    <button className="select-travel">By the hour</button>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">From</label>
                    <div className="icon-input">
                        <img src=""className="point" alt="" />
                        <input type="text" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">To</label>
                    <div className="icon-input">
                        <img src=""className="point" alt="" />
                        <input type="text" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">Date</label>
                    <div className="icon-input">
                        <img src=""className="point" alt="" />
                        <input type="date" placeholder="Address Airport"/>
                    </div>
                </div>
                <div className="inputs-form">
                    <label className="form-label" for="">Time</label>
                    <div className="icon-input">
                        <img src=""className="point" alt="" />
                        <input type="time" placeholder="Address Airport"/>
                    </div>
                </div>
            </form>
            <button className="send-form">Enviar formulario</button>
        </div>
    );
}
export default Form;