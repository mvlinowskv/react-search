import React from 'react';

const Scroll = (props) => {


    return(
        <div className='box-scroll' style={{overflowY: 'auto', height:'70vh'}}>
            {props.children}

        </div>
    )
}

export default Scroll;