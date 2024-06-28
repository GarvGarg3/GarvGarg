import React from 'react';
import '../../stylesheets/Skill.css';

function Skill() {
    
    return (
        <div className="skillComponent">
            <ul className="skillsList">
                <li>
                    HTML5:
                    <div className="skillBar">
                        <div className="skillLevel" style={{ width: '100%' }}></div>
                    </div>
                </li>
                <li>
                    CSS3:
                    <div className="skillBar">
                        <div className="skillLevel" style={{ width: '100%' }}></div>
                    </div>
                </li>
                <li>
                    JavaScript:
                    <div className="skillBar">
                        <div className="skillLevel" style={{ width: '100%' }}></div>
                    </div>
                </li>
                <li>
                    Express.js:
                    <div className="skillBar">
                        <div className="skillLevel" style={{ width: '100%' }}></div>
                    </div>
                </li>
                <li>
                    EJS:
                    <div className="skillBar">
                        <div className="skillLevel" style={{ width: '100%' }}></div>
                    </div>
                </li>
                <li>
                    Python:
                    <div className="skillBar">
                        <div className="skillLevel python" style={{ width: '90%' }}></div>
                    </div>
                </li>
                <li>
                    jQuery:
                    <div className="skillBar">
                        <div className="skillLevel jQuery" style={{ width: '80%' }}></div>
                    </div>
                </li>
                <li>
                    Machine Learning:
                    <div className="skillBar">
                        <div className="skillLevel ML" style={{ width: '80%' }}></div>
                    </div>
                </li>
                <li>
                    React:
                    <div className="skillBar">
                        <div className="skillLevel react" style={{ width: '60%'}}></div>
                    </div>
                </li>
                <li>
                    Neural Networks:
                    <div className="skillBar">
                        <div className="skillLevel NN" style={{ width: '50%'}}></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Skill;
