export const scrollToElement = (id: string, offset = 100) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const handleScrollClick = (
  e: React.MouseEvent,
  id: string,
  offset = 100,
  callback?: () => void
) => {
  e.preventDefault();
  if (callback) callback();
  scrollToElement(id, offset);
};
