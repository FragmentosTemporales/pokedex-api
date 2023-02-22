const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      favorite: []
    },
    actions: {
      addFavorite: (name) => {
        const { favorite } = getStore();
        if (!favorite.includes(name)) {
          const newFavorites = [...favorite, name];
          setStore({ favorite: newFavorites });
        }
      },
      delFavorite: (index) => {
        const { favorite } = getStore();
        const newFavorites = [...favorite];
        newFavorites.splice(index, 1);
        setStore({ favorite: newFavorites });
      }
    },

  };
};
export default getState;