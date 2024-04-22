import React from 'react'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Transpilation1.css'
import torchLogo from '../assets/torch-logo.png'
import tfLogo from '../assets/tf-logo.png'
import ivyTranspile from '../assets/ivy-transpile.png'
import arrow from '../assets/curved-arrow-dark-gray.png'
import torchModel from '../assets/torch1.png'
import tfModel from '../assets/translated-tf1.png'
import Explanation1 from './Explanation1'

function Transpilation1() {
    const [showExplanation] = useState<boolean>(false);  // setShowExplanation

    return (
        <div>
            <div className="transpilation">
                <img src={ivyTranspile} className="ivy-transpile" alt="ivy.transpile" />
            </div>
            <div>
                <img src={arrow} className="arrow" alt="arrow" />
            </div>
            <div className="transpilation-container">
                <div className="transpilation-item">
                    <img src={torchLogo} className="framework-logo" alt="PyTorch" title="PyTorch" />
                    <img src={torchModel} className="torch-model" alt="PyTorch Model" title="PyTorch Model" />
                </div>
                <div className="transpilation-item">
                    <img src={tfLogo} className="framework-logo" alt="TensorFlow" title="TensorFlow" />
                    <img src={tfModel} className="tf-model" alt="Transpiled TensorFlow Model" title="Transpiled TensorFlow Model" />
                </div>
            </div>
            {/* <button className="deep-dive-button" onClick={() => setShowExplanation(!showExplanation)}>
                {showExplanation ? 'Deep Dive -' : 'Deep Dive +'}
            </button> */}
            <CSSTransition
                in={showExplanation}
                timeout={1000}
                classNames="deep-dive"
                unmountOnExit
            >
                <Explanation1 />
            </CSSTransition>
        </div>
    );
}

export default Transpilation1;
