const isCurrentYear = (year: number) => {
  const yearNow = new Date().getFullYear();

  if (year > yearNow) {
    return 'Now';
  }

  return year;
};

export default isCurrentYear;
