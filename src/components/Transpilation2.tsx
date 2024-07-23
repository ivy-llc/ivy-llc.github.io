"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import "src/styles/Transpilation2.css";
import ivyTranspile from "src/assets/tf-translate.png";
import torchModel from "src/assets/torch1.png";
import Explanation1 from "src/components/Explanation1";
import torchTranslate from "src/assets/torch-330-110.png";
import tfTranslate from "src/assets/tf-330-110.png";

function Transpilation2() {
    const [showExplanation] = useState<boolean>(false);  // setShowExplanation

    const { ref: ref_torch, inView: inViewTorch } = useInView({
        threshold: 0.25,
        triggerOnce: true,
    });

    const { ref: ref_tf, inView: inViewTF } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const { ref: ref_final, inView: inViewFinal } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fadeInClassTorch = inViewTorch ? "fade-in" : "hidden";
    const fadeInClassTF = inViewTF ? "fade-in" : "hidden";
    const fadeInClassFinal = inViewFinal ? "fade-in" : "hidden";

    return (
        <div>
            <div className={`transpilation-step ${fadeInClassTorch}`} ref={ref_torch} >
                <p>Define a <span className="pt-text">PyTorch</span> model</p>
                <img src={torchModel.src} className="torch-model" alt="PyTorch model" />
            </div>
            <div className={`transpilation-step ${fadeInClassTF}`} ref={ref_tf}>
                {/* ivy color: #08bc2c */}
                <p>Transpile to <span className="tf-text">TensorFlow</span></p>
                <img src={ivyTranspile.src} className="ivy-transpile" alt="ivy.transpile" />
            </div>
            <div className={`transpilation-step ${fadeInClassFinal}`} ref={ref_final}>
                <p>Use in the new framework</p>
                <img src={torchTranslate.src} className="torch-translate" alt="" />
                <img src={tfTranslate.src} className="torch-translate" alt="" />
            </div>
            {/* <button className="deep-dive-button" onClick={() => setShowExplanation(!showExplanation)}>
                {showExplanation ? "Deep Dive -" : "Deep Dive +"}
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
