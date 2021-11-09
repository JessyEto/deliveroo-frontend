import Panier from './Panier';
import { useState } from 'react';

const Menu = ({ data, total, setTotal, fraisDeLivraison }) => {
  // data for Panier
  const [listMeals, setListMeals] = useState([]);

  return (
    <div>
      <Panier
        total={total}
        fraisDeLivraison={fraisDeLivraison}
        listMeals={listMeals}
        // handlePanierChange={handlePanierChange}
      />
      <div className="menu">
        {data.categories
          .map((elem, index) => {
            return (
              <div key={index}>
                <h2>{elem.name}</h2>
                <div>
                  {elem.meals.map((elem) => {
                    // Change on Total to be done at meal click
                    const handlePanierChange = () => {
                      setTotal(total + Number(elem.price));
                      const newTabListMeals = [...listMeals];
                      // const newTabMealCount = [...mealCount];

                      const obj = {
                        id: elem.id,
                        title: elem.title,
                        prix: elem.price,
                        quantity: 1,
                      };

                      const indexElem = listMeals.findIndex((e) => {
                        return e.id === elem.id;
                      });

                      if (indexElem === -1) {
                        newTabListMeals.push(obj);
                        setListMeals(newTabListMeals);
                      } else {
                        listMeals[indexElem] = {
                          id: elem.id,
                          title: elem.title,
                          prix: elem.price,
                          quantity: listMeals[indexElem].quantity + 1,
                        };
                      }
                    };

                    // The return
                    return (
                      <div
                        className="meal"
                        key={elem.id}
                        onClick={handlePanierChange}
                      >
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                        <p>
                          {elem.price}
                          <span>{elem.popular && 'Populaire'}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default Menu;
