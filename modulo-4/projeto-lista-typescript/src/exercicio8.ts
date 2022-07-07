const checkValidity = (birthDate: any, issueDate: string): any => {
  const newBirthDate = new Date(birthDate);
  const actualDate = new Date();
  const newActualDate =
    actualDate.getDate() +
    "/" +
    (actualDate.getMonth() + 1) +
    "/" +
    actualDate.getFullYear();
  const diff = Math.abs(actualDate.getTime() - newBirthDate.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return new Date(birthDate);
};

console.log(checkValidity("26/04/1990", "26/04/2005"));
