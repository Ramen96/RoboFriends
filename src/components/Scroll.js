import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            height: '80vh',
            overflowY: 'scroll'
            }}>
            {props.children}
        </div>
    );
}

export default Scroll;