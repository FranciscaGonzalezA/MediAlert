import { useState } from "react";

export default function PacienteForm() {

  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [estado, setEstado] = useState('');

  const procesarFormulario = async (eventoSubmit) => {
    try {
      eventoSubmit.preventDefault();

      const paciente = {
        nombre,
        fechaIngreso,
        estado
      };
      
      const baseUrl = 'http://localhost:3000';
      const url = baseUrl + '/paciente';

      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paciente)
      });

      if (!respuesta.ok) throw new Error("No se pudo guardar al paciente")
      const pacienteGuardado = await respuesta.json();
      console.dir(pacienteGuardado);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h2>Ingreso de pacientes</h2>
      <form action="form" method="post" onSubmit={procesarFormulario}>
        <label htmlFor="nombre">Nombre :</label>
        <input type="text" id="name" placeholder="Nombre Apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor="fechaIngreso">Fecha de Ingreso :</label>
        <input type="date" id="fechaIngreso" value={fecha} onChange={(e) => setFecha(e.target.value)} />

        <label htmlFor="estado">Estado :</label>
        {/* <input type="text" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} /> */}
        <select name="estado" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Critico">Critico</option>
          <option value="Estable">Estable</option>
        </select>

        <button type="submit">Guardar</button>
      </form>

      Nombre: {nombre}  |  Fecha Ingreso: {fecha}  |  Estado: {estado}
    </main>
  );
}