// Mostrar o número de favoritos
import { createContext, useState } from "react";

// A const FavoritesContext cria o componente FavoritesContext.Provider
const FavoritesContext = createContext({
  // Valor inicial do contexto
  favorites: [],
  totalFavorites: 0,

  // Ajudará no preenchimento automático
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// Responsável por atualizar os valores do contexto
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // Melhor maneira de atualizar o estado se estiver dependendo de uma versão anterior
    setUserFavorites((prevUserFavorites) => {
      // concat está enviando a variável para uma nova matriz e estende essa nova matriz com a qual foi adicionada ao alterar o estado
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      // filter retorna uma nova matriz em que podemos filtrar os itens
      // Retornará true se o meetupId for diferente ao meetup e false se for igual
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemsFavoriteHandler(meetupId) {
    // Retorna alguns dos favoritos do usuário
    // Permitirá descobrirmos se algum item desse array corresponde à nossa condição:
    // meetup.id === meetupId
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  // Essa variável que irá atualizar o value do contexto
  const context = {
    // No contexto inicial definiu os mesmos objetos, favorites e totalFavorites
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
