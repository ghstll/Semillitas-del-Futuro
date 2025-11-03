import { Alumno } from "../pages/alumno/alumno"
export async function getAlumnos() : Promise<Alumno[]>{
  try {
    const response = await fetch(`${process.env['API_URL']}/alumnos`)
    if(!response.ok) return []
    return []
  } catch (error) {
    return []
  }
}
