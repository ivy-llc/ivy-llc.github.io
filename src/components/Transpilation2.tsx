import React from 'react'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Transpilation2.css'
import ivyTranspile from '../assets/tf-translate.png'
import torchModel from '../assets/torch1.png'
import Explanation1 from './Explanation1'
import torchTranslate from '../assets/torch-330-110.png'
import tfTranslate from '../assets/tf-330-110.png'

function Transpilation2() {
    const [showExplanation] = useState<boolean>(false);  // setShowExplanation

    return (
        <div>
            <div className="transpilation-step">
                <h3>Define a <span style={{ color: '#ef4b28' }}>PyTorch</span> model</h3>
                <img src={torchModel.src} className="torch-model" alt="PyTorch model" />
            </div>
            <div className="transpilation-step">
                {/* ivy color: #08bc2c */}
                <h3>Transpile to <span style={{ color: '#ff8105' }}>TensorFlow</span></h3>
                <img src={ivyTranspile.src} className="ivy-transpile" alt="ivy.transpile" />
            </div>
            <div className="transpilation-step">
                <h3>Use in the new framework</h3>
                <img src={torchTranslate.src} className="torch-translate" alt="" />
                <img src={tfTranslate.src} className="torch-translate" alt="" />
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

export default Transpilation2;
