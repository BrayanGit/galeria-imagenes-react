import React from 'react';
import '../cascada/Card.css';

function Card(props) {
  return (
    <div className='contenedor-card'>
      <img className='imagen-card' src={require(`../imagenes/imagen-${props.imagen}.jpg`)} alt='coyote' />
      <div className='texto-card'>
        <p className='nombre-card'><strong>{props.nombre}</strong></p>
        <p className='pais-card'><strong>{props.pais}</strong></p>
        <p className='alimentacion-card'><strong>{props.alimentacion}</strong></p>
        <p className='texto-card'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Card;
