import React from 'react'

const SutilButton = ({ text }) => {
    return (
        <button>
            {text}
            <style jsx>
                {`
                button {
                    align-items: center;
                    background-color: transparent;
                    color: #000;
                    cursor: pointer;
                    display: flex;
                    font-size: 1.8rem;
                    font-weight: 700;
                    line-height: 1.5;
                    text-decoration: none;
                    text-transform: uppercase;
                    outline: 0;
                    border: 0;
                    padding: 1rem;
                }

                button:before {
                    background-color: #000;
                    content: "";
                    display: inline-block;
                    height: 3px;
                    margin-right: 10px;
                    transition: all .42s cubic-bezier(.25,.8,.25,1);
                    width: 0;
                }

                button:hover:before {
                    background-color: #000;
                    width: 4rem;
                }
                
                `}
            </style>
        </button>
    )
}

export default SutilButton