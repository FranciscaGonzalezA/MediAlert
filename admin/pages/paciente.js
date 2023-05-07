import Layout from "@/components/layout";
import PacienteForm from "@/components/paciente/form";
import PacienteListado from "@/components/paciente/listado";

export default function PaginaPaciente() {
  return (
    <Layout>
      <h1 className="titulo">Pacientes</h1>
      <PacienteForm />
      <PacienteListado />
    </Layout>
  );
}