import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {

    const loadedProducts = useLoaderData()
    console.log(loadedProducts);

    return (
        <div>








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
};

export default Products;