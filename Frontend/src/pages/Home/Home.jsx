import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
function Home() {
  const [category, setCategory] = useState('All');
  return (
    <div className="p-[100px]">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
