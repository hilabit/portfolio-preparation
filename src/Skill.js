import React from 'react';
import './Skills.css';



const Skill = ({icon, name}) => {
    return (
        <div className = 'skill'>
                <div className = 'skill-icon'>
                    {icon}
                </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Skill;
