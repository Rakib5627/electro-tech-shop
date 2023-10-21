
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {


    const brandData = useLoaderData();

    return (
        <div className="">

            <h3 className="text-4xl font-bold text-center mb-5">Brands</h3>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    brandData.map(brand => <Link to={`/products/${brand.title}`} key={brand.id}>
                        <div className="card card-compact bg-base-100 shadow-xl px-2">
                            <figure><img src={brand.picture} alt="Shoes" className=" md:h-40" /></figure>
                            <div className="card-body">
                                <h2 className="text-center border-y">{brand.title}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>




        </div>
    );
};

export default Brands;