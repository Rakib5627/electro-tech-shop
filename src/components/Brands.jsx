
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {


    const brandData = useLoaderData();

    return (
        <div className="">


            <div className="grid grid-cols-2 gap-5">
                {
                    brandData.map(brand => <Link to={`/products/${brand.title}`} key={brand.id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={brand.picture} alt="Shoes" className=" h-80" /></figure>
                            <div className="card-body">
                                <h2 className="text-center">{brand.title}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>




        </div>
    );
};

export default Brands;