import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Header from './components/Header';
import Panier from './components/Panier';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  // data for Panier
  const [listMeals, setListMeals] = useState([]);

  const fraisDeLivraison = Number(2.5).toFixed(2);

  const fetchData = async () => {
    const response = await axios.get(
      'https://deliveroo-backend-reacteur-api.herokuapp.com/'
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div className="container">
      <Header />
      <Hero data={data} />
      <Panier
        total={total}
        fraisDeLivraison={fraisDeLivraison}
        listMeals={listMeals}
      />
      <Menu
        data={data}
        total={total}
        setTotal={setTotal}
        listMeals={listMeals}
        setListMeals={setListMeals}
      />
    </div>
  );
};

export default App;
