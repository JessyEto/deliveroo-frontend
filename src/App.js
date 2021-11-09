import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Header from './components/Header';

// Import of fantawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faStar,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faMinus, faStar, faPlusCircle, faMinusCircle);

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

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
      <Menu
        data={data}
        total={total}
        setTotal={setTotal}
        // listMeals={listMeals}
        // setListMeals={setListMeals}
        fraisDeLivraison={fraisDeLivraison}
      />
    </div>
  );
};

export default App;
