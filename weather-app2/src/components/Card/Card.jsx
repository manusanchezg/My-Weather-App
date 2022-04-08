import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon">
            <button onClick={onClose} className="btn">X</button>
        </div>
        <div className="card-body">

           <Link to={`/ciudad/${id}`} style={{textDecoration: 'none'}}>
            <h3 className="card-title">{name}</h3>
            </Link>
            
          <div className="row">
            <div className='min'>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className='max'>
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
