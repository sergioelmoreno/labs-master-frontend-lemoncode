export const getData = (lang = "ES") => {
  return new Promise((resolve, reject) => {
    fetch(`../../data-${lang}.json`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(error => reject(error));

  })
}