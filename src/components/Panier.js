const Panier = ({ total, fraisDeLivraison, listMeals }) => {
  return (
    <div>
      <h3>Valider mon panier</h3>
      {listMeals.map((elem, index) => {
        return (
          <p key={index}>
            <span>moins</span>
            <span> {elem.quantity} </span>
            <span>plus </span>
            {elem.title} <span>yo</span>
          </p>
        );
      })}
      <p>
        Sous-total <span>{total.toFixed(2)}</span> €
      </p>
      <p>
        Frais de livraison <span>{fraisDeLivraison}</span>€
      </p>
      <p>Total {(Number(total) + Number(fraisDeLivraison)).toFixed(2)}</p>
    </div>
  );
};

export default Panier;
