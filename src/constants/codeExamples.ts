const codeExamples = {
    PyTorch: {
        TensorFlow: `
import ivy
import torch
import timm
import tensorflow as tf

# Get a pretrained pytorch model
mlp_encoder = timm.create_model("mixer_b16_224", pretrained=True, num_classes=0)

# Transpile it into a keras.Model with the corresponding parameters
noise = torch.randn(1, 3, 224, 224)
mlp_encoder = ivy.transpile(mlp_encoder, source="torch", to="tensorflow", args=(noise,))

# Build a classifier using the transpiled encoder
class Classifier(tf.keras.Model):
    def __init__(self):
        super().__init__()
        self.encoder = mlp_encoder
        self.output_dense = tf.keras.layers.Dense(units=1000, activation="softmax")

    def call(self, x):
        x = self.encoder(x)
        return self.output_dense(x)

# Transform the classifier and use it as a standard keras.Model
x = tf.random.normal(shape=(1, 3, 224, 224))
model = Classifier()
ret = model(x)
`,
        NumPy: `
import ivy
import kornia
import requests
import numpy as np
from PIL import Image

# Transpile kornia from pytorch to numpy
np_kornia = ivy.transpile(kornia, source="torch", to="numpy")

# get an image
url = "http://images.cocodataset.org/train2017/000000000034.jpg"
raw_img = Image.open(requests.get(url, stream=True).raw)

# convert it to the format expected by kornia
img = np.transpose(np.array(raw_img), (2, 0, 1))
img = np.expand_dims(img, 0) / 255

# and use the transpiled version of any function from the library!
out = np_kornia.enhance.sharpness(img, 5)
`,
        Jax: `
import ivy
import timm
import torch
import jax
import haiku as hk

# Get a pretrained pytorch model
mlp_encoder = timm.create_model("mixer_b16_224", pretrained=True, num_classes=0)

# Transpile it into a hk.Module with the corresponding parameters
noise = torch.randn(1, 3, 224, 224)
mlp_encoder = ivy.transpile(mlp_encoder, source="torch", to="haiku", args=(noise,))

# Build a classifier using the transpiled encoder
class Classifier(hk.Module):
    def __init__(self, num_classes=1000):
        super().__init__()
        self.encoder = mlp_encoder()
        self.fc = hk.Linear(output_size=num_classes, with_bias=True)

    def __call__(self, x):
        x = self.encoder(x)
        x = self.fc(x)
        return x

def _forward_classifier(x):
    module = Classifier()
    return module(x)

# Transform the classifier and use it as a standard hk.Module
rng_key = jax.random.PRNGKey(42)
x = jax.random.uniform(key=rng_key, shape=(1, 3, 224, 224), dtype=jax.numpy.float32)
forward_classifier = hk.transform(_forward_classifier)
params = forward_classifier.init(rng=rng_key, x=x)

ret = forward_classifier.apply(params, None, x)
`
    },
    TensorFlow: {
        PyTorch: `
import ivy
import torch
import tensorflow as tf

# Get a pretrained keras model
eff_encoder = tf.keras.applications.efficientnet_v2.EfficientNetV2B0(
    include_top=False, weights="imagenet", input_shape=(224, 224, 3)
)

# Transpile it into a torch.nn.Module with the corresponding parameters
noise = tf.random.normal(shape=(1, 224, 224, 3))
torch_eff_encoder = ivy.transpile(eff_encoder, source="tensorflow", to="torch", args=(noise,))

# Build a classifier using the transpiled encoder
class Classifier(torch.nn.Module):
    def __init__(self, num_classes=20):
        super().__init__()
        self.encoder = torch_eff_encoder
        self.fc = torch.nn.Linear(1280, num_classes)

    def forward(self, x):
        x = self.encoder(x)
        return self.fc(x)

# Initialize a trainable, customizable, torch.nn.Module
classifier = Classifier()
ret = classifier(torch.rand((1, 244, 244, 3)))
`,
        NumPy: `
import ivy
import tensorflow as tf
import numpy as np

def loss(predictions, targets):
    return tf.sqrt(tf.reduce_mean(tf.square(predictions - targets)))

# transpile any function from tf to numpy
np_loss = ivy.transpile(loss, source="tensorflow", to="numpy")

# get some arrays
p = np.array([3.0, 2.0, 1.0])
t = np.array([0.0, 0.0, 0.0])

# and use the transpiled version!
out = np_loss(p, t)
`,
        Jax: `
import ivy
import jax
import os
os.environ["SM_FRAMEWORK"] = "tf.keras"
import segmentation_models as sm

# transpile sm from tensorflow to jax
jax_sm = ivy.transpile(sm, source="tensorflow", to="jax")

# get some image-like arrays
key = jax.random.PRNGKey(23)
key1, key2 = jax.random.split(key)
output = jax.random.uniform(key1, (1, 3, 512, 512))
target = jax.random.uniform(key2, (1, 3, 512, 512))

# and use the transpiled version of any function from the library!
out = jax_sm.metrics.iou_score(output, target)
`
    },
    NumPy: {
        PyTorch: `
import ivy
import numpy as np
import torch

def loss(predictions, targets):
    return np.sqrt(np.mean((predictions - targets) ** 2))

# transpile any function from numpy to torch
torch_loss = ivy.transpile(loss, source="numpy", to="torch")

# get some arrays
p = torch.tensor([3.0, 2.0, 1.0])
t = torch.tensor([0.0, 0.0, 0.0])

# and use the transpiled version!
out = torch_loss(p, t)
`,
        TensorFlow: `
import ivy
import madmom
import tensorflow as tf

# transpile madmom from numpy to tensorflow
tf_madmom = ivy.transpile(madmom, source="numpy", to="tensorflow")

# get some arrays
freqs = tf.range(20) * 10

# and use the transpiled version of any function from the library!
out = tf_madmom.audio.filters.hz2midi(freqs)
`,
        Jax: `
import ivy
import numpy as np
import jax
import jax.numpy as jnp
jax.config.update('jax_enable_x64', True)

def loss(predictions, targets):
    return np.sqrt(np.mean((predictions - targets) ** 2))

# transpile any function from numpy to jax
jax_loss = ivy.transpile(loss, source="numpy", to="jax")

# get some arrays
p = jnp.array([3.0, 2.0, 1.0])
t = jnp.array([0.0, 0.0, 0.0])

# and use the transpiled version!
out = jax_loss(p, t)
`
    },
    Jax: {
        PyTorch: `
import ivy
import rax
import torch

# transpile rax from jax to torch
torch_rax = ivy.transpile(rax, source="jax", to="torch")

# get some arrays
scores = torch.tensor([2.2, 1.3, 5.4])
labels = torch.tensor([1.0, 0.0, 0.0])

# and use the transpiled version of any function from the library!
out = torch_rax.poly1_softmax_loss(scores, labels)
`,
        TensorFlow: `
import ivy
import jax.numpy as jnp
import tensorflow as tf

def loss(predictions, targets):
    return jnp.sqrt(jnp.mean((predictions - targets) ** 2))

# transpile any function from jax to tensorflow
tf_loss = ivy.transpile(loss, source="jax", to="tensorflow")

# get some arrays
p = tf.constant([3.0, 2.0, 1.0])
t = tf.constant([0.0, 0.0, 0.0])

# and use the transpiled version!
out = tf_loss(p, t)
`,
        NumPy: `
import ivy
import jax.numpy as jnp
import numpy as np

def loss(predictions, targets):
    return jnp.sqrt(jnp.mean((predictions - targets) ** 2))

# transpile any function from jax to numpy
np_loss = ivy.transpile(loss, source="jax", to="numpy")

# get some arrays
p = np.array([3.0, 2.0, 1.0])
t = np.array([0.0, 0.0, 0.0])

# and use the transpiled version!
out = np_loss(p, t)
`
    }
};


export default codeExamples;