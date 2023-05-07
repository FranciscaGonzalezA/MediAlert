import { useEffect, useState } from "react"

export default function PacienteListado() {
  const [pacientes, setPacientes] = useState([]);

  const cargarDatos = async () => {
    try {
      const baseUrl='http://localhost:3000';
      const url = baseUrl+'/paciente'
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("problemas al cargar los pacientes");
      const pacienteRes = await respuesta.json();
      setPacientes(pacienteRes);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    cargarDatos();
  }, [])
  return (
    <>
      <h2>Listado Pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha Ingreso</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            pacientes.map(paciente => (
              <tr>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.fechaIngreso}</td>
                <td>{paciente.estado}</td>
                <td></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}