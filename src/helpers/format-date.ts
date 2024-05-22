// fichier javaScript
//methode formatDate pour afficher la date à l'utilisateur
const formatDate = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export default formatDate;
