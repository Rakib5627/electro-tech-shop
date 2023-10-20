import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {

    const loadedCart = useLoaderData();
    const [carts, setCarts] = useState(loadedCart);
    console.log(loadedCart)

    return (
        <div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    carts.map(cart => <MyCartCard 
                        key={cart._id}
                        card={cart}
                        carts={carts}
                        setCarts={setCarts}
                    ></MyCartCard>)
                }
            </div>

        </div>
    );
};

export default MyCart;