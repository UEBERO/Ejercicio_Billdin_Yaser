// Componente que representa cada tarea individual

import React, { useState } from 'react';

function Tarea({ tarea, setTareas }) {
    // Estado local para controlar si la tarea se está editando y para almacenar el título editado.
    const [editando, setEditando] = useState(false);
    const [titulo, setTitulo] = useState(tarea.titulo);
    
    return (
        <div>
        <h3>{titulo}</h3>
        <p>Estado: {tarea.estado}</p>
        <button class="editar_btn" onClick={() => setEditando(true)}>Editar</button>

        {/* Me apoyé en stackOverflow para el metodo filter */}
        <button class="eliminar_btn" onClick={() => setTareas((tareas) => tareas.filter((t) => t !== tarea))}>Eliminar</button>
        {editando && (
            <div>
            <input
                class="input_edit"
                type="text"
                value={titulo}
            />
            <select class="estado_selector"
                value={tarea.estado}

                // En esta parte me apoyé de stackOverflow para poder hacerlo
                // Acualizamos el estado de las tareas cuando se edita.
                onChange={(e) => setTareas((tareas) => {
                
                const nuevasTareas = [...tareas];
                const nuevaTarea = { ...tarea, estado: e.target.value };
                nuevasTareas[nuevasTareas.indexOf(tarea)] = nuevaTarea;
                
                return nuevasTareas;
                })}
            >
                <option class="estado_btn" value="por hacer">Por Hacer</option>
                <option class="estado_btn" value="en curso">En Curso</option>
                <option class="estado_btn" value="finalizada">Finalizada</option>
            </select>
            <button className="guardar_btn" onClick={() => setEditando(false)}>Guardar</button>
            </div>
        )}
        </div>
  );
}

export default Tarea;
