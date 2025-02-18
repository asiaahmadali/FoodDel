import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useEffect, useContext } from 'react';

function Verify() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { backendURL } = useContext(StoreContext);
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();

  //   verify payments

  const verifyPayments = async () => {
    const response = await axios.post(`${backendURL}/api/order/verify`, {
      orderId,
      success,
    });
    if (response.data.success) {
      navigate('/myorders');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    verifyPayments();
  }, []);
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="w-[100px] h-[100px] self-center border-[5px] rounded-[50%] border-[#bdbdbd] border-t-orange-500 custom-animations"></div>
    </div>
  );
}

export default Verify;
