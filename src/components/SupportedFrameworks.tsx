import './SupportedFrameworks.css'
import jaxLogo from '../assets/jax-logo.png'
import numpyLogo from '../assets/numpy-logo.png'
import mlxLogo from '../assets/mlx-logo.png'
import torchLogo from '../assets/torch-full-logo.png'
import tfLogo from '../assets/tf-full-logo.png'

function SupportedFrameworks() {
    return (
        <div className="supported-frameworks">
            <img src={torchLogo} alt="PyTorch" className="torch-logo" />
            <img src={tfLogo} alt="TensorFlow" className="tf-logo" />
            <img src={jaxLogo} alt="JAX" className="jax-logo" />
            <img src={mlxLogo} alt="MLX" className="mlx-logo" />
            <img src={numpyLogo} alt="Numpy" className="numpy-logo" />
        </div>
    );
};

export default SupportedFrameworks;