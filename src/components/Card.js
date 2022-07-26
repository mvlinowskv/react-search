import React from 'react';

function Card({person}) {
    return(
        <div className='px-3'>
        <div className='card d-flex flex-column align-items-center justify-content-center p-4 bg-gradient'>
            <img className='rounded-circle img-fluid w-75' style={{aspectRatio: 1, objectFit: 'cover'}} alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            <div className='my-3'>
                <h2 className="text-center w-min-content mx-auto color-white">{person.name}</h2>
                <p className="text-center color-white">{person.email}</p>
            </div>
        </div>
        </div>

    )
}

export default Card;