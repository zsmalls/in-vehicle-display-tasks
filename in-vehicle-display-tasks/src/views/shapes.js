import React from 'react';

const Shapes = () => (
  <div>
    <h1>Some Shapes</h1>
    <p>Here's where the shapes will be!</p>

    <div className="container">
    <div className="row">
        <div className="col">
            <svg width="120" height="120">
                {/*--Circle--*/}
                <circle cx="60"
                        cy="60"
                        r="60">
                </circle>
            </svg>
        </div>
        {/*--Square--*/}
        <div className="col">
            <svg width="120" height="120">
                <path d="M 10,150 L 70,10 L 130,150 z"
                         fill="#D5D8CB"
                         stroke="#ECDCC6"
                         strokeWidth="6"
                         className="square"
                >
                </path>
            </svg>
        </div>
        {/*--Diamond-->*/}
        <div className="col">
            <svg width="120" height="120">
                <path d="M 10,150 L 70,10 L 130,150 z"
                         fill="blue"
                         stroke="grey"
                         strokeWidth="6"
                         className="diamond"
                >
                </path>
            </svg>
        </div>
    </div>
    <div className="row">
        {/*}--Triangle-->*/}
        <div className="col">
            <svg width="120" height="120">
                <path d="M 10,150 L 70,10 L 130,150 z"
                         fill="red"
                         stroke="darkgreen"
                         strokeWidth="6"
                         className="triangle"
                >
                </path>
            </svg>
        </div>
        {/*--Pentagon--*/}
        <div className="col">
            <svg width="120" height="120">
                <path d="M 10,150 L 70,10 L 130,150 z"
                         fill="#brown"
                         stroke="orange"
                         strokeWidth="6"
                         className="pentagon"
                >
                </path>
            </svg>
        </div>
        {/*}--Star-->*/}
        <div className="col">
            <svg height="210" width="500">
                <polygon points="100,10 40,198 190,78 10,78 160,198"
                         style={{fill:"lime",stroke:"purple",strokeWidth:5,fillRule:"nonzero",}}
                >
                </polygon>
            </svg>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-sm">
                One of three columns
            </div>
            <div className="col-sm">
                One of three columns
            </div>
            <div className="col-sm">
                One of three columns
            </div>
        </div>
    </div>
</div>
  </div>
)

export default Shapes