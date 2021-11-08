import { useState } from 'react';

const Menu = ({ data, total, setTotal, listMeals, setListMeals }) => {
  // const [totalPerMeal, setTotalPerMeal] = useState(0);

  return (
    <div className="menu">
      {data.categories
        .map((elem, index) => {
          return (
            <div key={index}>
              <h2>{elem.name}</h2>
              <div>
                {elem.meals.map((elem, index) => {
                  return (
                    <div
                      className="meal"
                      key={index}
                      onClick={() => {
                        setTotal(total + Number(elem.price));
                        const newTabListMeals = [...listMeals];
                        newTabListMeals.push(elem);
                        setListMeals(newTabListMeals);
                      }}
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
  );
};

export default Menu;
