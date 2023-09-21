// Componente que muestra la lista de tareas.

import React from 'react';
import Tarea from './Tarea';

// Con este componente recibimos las tareas como propiedada y representamos la lista de tareas.
function ListaDeTareas({ tareas, setTareas }) {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <div key={index} className='tarea'>
          {/* Renderiza cada tarea como un componente */}
          <Tarea  tarea={tarea} setTareas={setTareas} />
        </div>
      ))}
    </div>
  );
}

export default ListaDeTareas;
