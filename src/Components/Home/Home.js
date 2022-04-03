import React from 'react';
import UseTshirt from '../../Hooks/UseTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import useTShirts from '../../Hooks/UseTshirt';

const Home = () => {
    const [tShirts, setTShirt] = UseTshirt();
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;