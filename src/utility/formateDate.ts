export function DateFormate (date:string) {
  const dateTimeString = date
  const dateObject = new Date(dateTimeString)
  const hours = dateObject.getHours().toString().padStart(2, '0')
  const minutes = dateObject.getMinutes().toString().padStart(2, '0')
  const formattedTime = `${hours}:${minutes}`
  return formattedTime
}
// Year Month Day Formate type
export function DateFormateYMD (date:string){
  const dateTimeString = date
  const dateObject = new Date(dateTimeString)
  const year = dateObject.getFullYear().toString().padStart(2, '0')
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
  const day = dateObject.getDate().toString().padStart(2, '0')
  const formattedTime = `${year}-${month}-${day}`
  return formattedTime
}