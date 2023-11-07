export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;

  /* Örnek kullanım:
  const inputDate = new Date("Wed Nov 22 2023 00:00:00 GMT+0300 (GMT+03:00)");
  const formattedDate = formatDate(inputDate);
  console.log(formattedDate); // "2023-11-22" 
  */
}
