import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import Team from '../../components/Team/Team';
import Customer from '../../components/Customer/customer';

function Home() {
  const [category, setCategory] = useState('All');
  return (
    <div className="lg:px-[100px] px-[20px] ">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Team />
      <Customer />
      <AppDownload />
    </div>
  );
}

export default Home;
