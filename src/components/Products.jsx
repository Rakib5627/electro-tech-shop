import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import Carousel from "./Carousel.jsx";


const Products = () => {

    const loadedProducts = useLoaderData()
    console.log(loadedProducts);

    if (loadedProducts.length < 1){
        console.log('no product')
        return <>
        <div className="text-center">
            <p className="text-3xl">Sorry!</p>
            <p className="text-xl">No product of this brand is available now.</p>
        </div>
        </>
    }

    else{


        return (
            <div>
                <Carousel></Carousel>
    
                <div className="mt-20">
                    {
                        loadedProducts.map(p => <Product
                            key={p._id}
                            product={p}
                        ></Product>)
                    }
                </div>
            </div>
        );

    }

    
};

export default Products;