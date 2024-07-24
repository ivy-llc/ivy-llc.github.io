"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaLongArrowAltDown } from "react-icons/fa";
import "src/styles/Transpilation1.css";

const sourceCode = `
class CNN(torch.nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv = torch.nn.Conv2d(1, 16, kernel_size=3, stride=1, padding=1)
        self.relu = torch.nn.ReLU()
        self.maxpool = torch.nn.MaxPool2d(kernel_size=2, stride=2)
        self.fc = torch.nn.Linear(4 * 28 * 28, 10)

    def forward(self, x):
        x = self.conv(x)
        x = self.relu(x)
        x = self.maxpool(x)
        x = x.view(x.shape[0], -1)
        x = self.fc(x)
        return x
`;

const transpileCode = `
tensorflow_CNN = ivy.source_to_source(CNN, source="torch", target="tensorflow")
`;

const targetCode = `
class tensorflow_CNN(tensorflow.keras.Model):
    @tensorflow_store_config_info
    def __init__(self):
        self.super.__init__(
            v=getattr(self, "_v", None),
            buffers=getattr(self, "_buffers", None),
            module_dict=getattr(self, "_module_dict", None),
        )
        with tensorflow.name_scope("tensorflow_CNN/conv"):
            self.conv = tensorflow.Conv2d(1, 16, kernel_size=3, stride=1, padding=1)
        with tensorflow.name_scope("tensorflow_CNN/relu"):
            self.relu = tensorflow.ReLU()
        with tensorflow.name_scope("tensorflow_CNN/maxpool"):
            self.maxpool = tensorflow.MaxPool2d(kernel_size=2, stride=2)
        with tensorflow.name_scope("tensorflow_CNN/fc"):
            self.fc = tensorflow.Linear(4 * 28 * 28, 10)

    def call(self, x):
        x = self.conv(x)
        x = self.relu(x)
        x = self.maxpool(x)
        with tensorflow.name_scope("tensorflow_CNN/x"):
            x = tensorflow.view(x, x.shape[0], -1)
        x = self.fc(x)
        return x
`;

const customStyle = {
    fontSize: '1rem',
    lineHeight: '1.4',
};

const Transpilation1 = () => {
    return (
        <div className="source-to-source-section">
            <h1>Source-to-Source Transpilation</h1>
            <p>
                The transpiler converts the original model source code to source code in the target framework.
                This makes it incredibly easy to modify the model once it's been transpiled to the new framework - 
                just as simple as if it had been created using it originally.
            </p>
            <div className="code-block">
                <p className="pt-code-block-title">Source Code (PyTorch)</p>
                <SyntaxHighlighter language="python" style={atelierCaveLight} customStyle={customStyle}>
                    {sourceCode}
                </SyntaxHighlighter>
            </div>
            <FaLongArrowAltDown className="arrow-icon" />
            <div className="code-block">
                <p className="transpile-code-block-title">Source-to-Source Transpiler</p>
                <SyntaxHighlighter language="python" style={atelierCaveLight} customStyle={customStyle}>
                    {transpileCode}
                </SyntaxHighlighter>
            </div>
            <FaLongArrowAltDown className="arrow-icon" />
            <div className="code-block">
                <p className="tf-code-block-title">Transpiled Code (TensorFlow)</p>
                <SyntaxHighlighter language="python" style={atelierCaveLight} customStyle={customStyle}>
                    {targetCode}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default Transpilation1;
