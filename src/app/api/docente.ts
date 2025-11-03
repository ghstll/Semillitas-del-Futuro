import dotenv from 'dotenv'
dotenv.config() //Carga el contenido de .env en process.env
export interface Docente{
  nombre : string
  email : string
  password : string
}
export async function getDocentes() : (Promise<Docente[]>){
  try {
    const response = await fetch(`${process.env['API_URL']}/docentes`,{
      method : 'GET',
      headers : {
        "Content-Type" : "application/json"
      }
    })
    if(!response.ok){
      throw new Error(`HTTP error : ${response.status}`)
    }
    const data : Docente[] = await response.json()
    return data
  } catch (error) {
    console.error("Error al obtener docentes: ",error)
    return []
  }
}
export async function getDocenteById(id : number) : Promise<Docente>{
  try {
    const response = await fetch(`${process.env['API_URL']}/docente/${id}`,{
      method : 'GET',
      headers : {
        "Content-Type" : "application/json"
      }
    })
    if(!response.ok) throw new Error(`Error : ${response.status}`)
    return await response.json()
  } catch (error) {
    throw new Error(' ')
  }
}
export async function updateDocente(id : number){
  try {
    const response = await fetch(`${process.env['API_URL']}/docente/`)
  } catch (error) {
    
  }
}