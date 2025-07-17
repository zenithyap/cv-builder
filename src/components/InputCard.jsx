import '../styles/inputCard.css'
import Input from './Input'

import arrow from '../assets/arrow.svg'

export default function InputCard({ icon, title, inputs=[], isActive, onShow }) {
    return (
        <div className="card-container" onClick={onShow}>
            <div className="title-container">
                <img src={icon} alt="" />
                <h2>{title}</h2>
                <img className={isActive && 'rotate'} src={arrow} alt="" />
            </div>
            {isActive &&
                <div className="input-container">
                    {inputs.map(input => {
                        return (
                            <div key={input}>
                                <h3>{input}</h3>
                                <Input />
                            </div>
                        );
                    })}
                </div> 
            }
        </div>
    )
}