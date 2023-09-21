// Componente principal del proyecto

import React, { useState } from 'react';
import ListaDeTareas from './componentes/ListaDeTareas';
import './styles.css';

function App() {
  // Estado para almacenar las tareas y la nueva tarea que se agreguen
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Agregar nueva tarea al estado tareas, se llama cuando el user hace clic al boton "agregar tarea"
  const agregarTarea = () => {
    if (nuevaTarea === '') return;
    setTareas([...tareas, { titulo: nuevaTarea, notas: '', estado: 'por hacer', subtareas: [] }]);
    setNuevaTarea('');
  };

  
  return (
    <div className="App">
      <h1>Gestión de Tareas</h1>
      <input
        class="input_text"
        type="text"
        placeholder="Nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button class="anadirBoton" onClick={agregarTarea}>Agregar tarea</button>
      {/*Muestra la lista de tareas existente */}
      <ListaDeTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
  
  
}

export default App;
