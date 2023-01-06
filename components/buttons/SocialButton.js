import React from 'react'

const SocialButton = ({ icon: Icon, text, color }) => {
    return (
        <button className='button'>
            <div className='icon'>
                <Icon size={'26px'} color={color} />
            </div>
            <p>{text}</p>
            <style jsx>
                {`
                .button {
                    cursor: pointer;
 background: ${color};
 color: white;
 padding: 0.65em 0;
 font-size: 17px;
 border: none;
 border-radius: 0.7em;
 letter-spacing: 0.08em;
 position: relative;
 display: flex;
 align-content: center;
 align-items: center;
 overflow: hidden;
 height: 100%;
 padding-left: 2.8em;
 padding-right: 0.9em;
}

.button .icon {
 background: #fff;
 height: 2em;
 width: 2em;
 border-radius: 2em;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 0.4em;
 transition: all 0.5s;
}

.button p {
    color: white;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
}

.icon svg {
 transition: all 0.5s;
 color: #2CA0D9;
}

.button:hover .icon svg {
 transform: rotate(360deg);
}

.button:hover .icon {
 width: calc(100% - 0.85rem);
 border-radius: 0.5em;
 height: 75%;
}
                `}
            </style>
        </button>

    )
}

export default SocialButton