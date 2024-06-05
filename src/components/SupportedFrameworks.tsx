"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import "src/styles/SupportedFrameworks.css";
import jaxLogo from "src/assets/jax-logo.png";
import numpyLogo from "src/assets/numpy-logo.png";
import mlxLogo from "src/assets/mlx-logo.png";
import torchLogo from "src/assets/torch-full-logo.png";
import tfLogo from "src/assets/tf-full-logo.png";

function SupportedFrameworks() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fadeInClass = inView ? "fade-in" : "hidden";

    return (
        <div className="supported-frameworks">
            <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                <img src={torchLogo.src} alt="PyTorch" className={`torch-logo ${fadeInClass}`} ref={ref} />
            </a>
            <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                <img src={tfLogo.src} alt="TensorFlow" className={`tf-logo ${fadeInClass}`} ref={ref} />
            </a>
            <a href="https://jax.readthedocs.io/en/latest/notebooks/quickstart.html" target="_blank" rel="noopener noreferrer">
                <img src={jaxLogo.src} alt="JAX" className={`jax-logo ${fadeInClass}`} ref={ref} />
            </a>
            {/* <a href="https://github.com/ml-explore/mlx" target="_blank" rel="noopener noreferrer">
                <img src={mlxLogo.src} alt="MLX" className={`mlx-logo ${fadeInClass}`} ref={ref} />
            </a> */}
            <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                <img src={numpyLogo.src} alt="Numpy" className={`numpy-logo ${fadeInClass}`} ref={ref} />
            </a>
        </div>
    );
}

export default SupportedFrameworks;
