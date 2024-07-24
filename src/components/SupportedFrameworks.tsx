"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import "src/styles/SupportedFrameworks.css";
import pytorchLogo from "src/assets/logos/pytorch.svg";
import tensorflowLogo from "src/assets/logos/tensorflow.svg";
import jaxLogo from "src/assets/logos/jax.svg";
import numpyLogo from "src/assets/logos/numpy.svg";

function SupportedFrameworks() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fadeInClass = inView ? "fade-in" : "hidden";

    return (
        <div className="supported-frameworks">
            <div className={`framework-logo ${fadeInClass}`} ref={ref}>
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                    <img src={pytorchLogo.src} alt="PyTorch" />
                </a>
            </div>
            <div className={`framework-logo ${fadeInClass}`} ref={ref}>
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                    <img src={tensorflowLogo.src} alt="TensorFlow" />
                </a>
            </div>
            <div className={`framework-logo ${fadeInClass}`} ref={ref}>
                <a href="https://jax.readthedocs.io/en/latest/notebooks/quickstart.html" target="_blank" rel="noopener noreferrer">
                    <img src={jaxLogo.src} alt="JAX" />
                </a>
            </div>
            <div className={`framework-logo ${fadeInClass}`} ref={ref}>
                <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                    <img src={numpyLogo.src} alt="Numpy" />
                </a>
            </div>
        </div>
    );
}

export default SupportedFrameworks;
