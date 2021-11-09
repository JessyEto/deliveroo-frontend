import { useState } from 'react';
// Import of icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Panier = ({ total, fraisDeLivraison, listMeals, setListMeals }) => {
  // Refresh component state
  const [compRefresh, setCompRefresh] = useState(false);

  return (
    <div className="panier">
      <h3>Valider mon panier</h3>
      {listMeals.map((elem, index) => {
        if (elem.quantity === 0) {
          return <p key={index}></p>;
        } else {
          // Handle quantity update when minus button is pressed
          const handleMinusQuantityUpdate = () => {
            if (elem.quantity > 0) {
              const quantityUpdate = elem.quantity - 1;
              elem.quantity = quantityUpdate;
              setCompRefresh(!compRefresh);
            }
          };

          // Handle quantity update when plus button is pressed
          const handlePlusQuantityUpdate = () => {
            const quantityUpdate = elem.quantity + 1;
            elem.quantity = quantityUpdate;
            setCompRefresh(!compRefresh);
          };

          return (
            <div className="add-item-line" key={index}>
              <div className="add-remove-button">
                <div>
                  <FontAwesomeIcon
                    className="button-plus-minus"
                    icon="minus-circle"
                    onClick={handleMinusQuantityUpdate}
                  />
                  <span> {elem.quantity} </span>
                  <FontAwesomeIcon
                    className="button-plus-minus"
                    icon="plus-circle"
                    onClick={handlePlusQuantityUpdate}
                  />{' '}
                </div>
                <p>{elem.title}</p>
              </div>
              <div>
                <span>{(elem.quantity * elem.prix).toFixed(2)} €</span>
              </div>
            </div>
          );
        }
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
