const Panier = ({ total, fraisDeLivraison, listMeals }) => {
  return (
    <div>
      <h3>Valider mon panier</h3>
      {listMeals.map((elem) => {
        return (
          <p>
            <span>moins</span>
            <span> count </span>
            <span>plus </span>
            {elem.title} <span>{elem.price}</span>
          </p>
        );
      })}
      <p>
        Sous-total <span>{total}</span> €
      </p>
      <p>
        Frais de livraison <span>{fraisDeLivraison}</span>€
      </p>
      <p>Total {Number(total) + Number(fraisDeLivraison)}</p>
    </div>
  );
};

export default Panier;
