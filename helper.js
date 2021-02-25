/**
 * remove spaces from title and change to lowercase
 * @param title
 * @returns {string}
 */
export const getKeyForQuestion = title => {
  return title
    .toLowerCase()
    .replace(/\s/g, '')
    .trim()

};
