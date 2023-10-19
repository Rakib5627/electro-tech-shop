import { Link } from "react-router-dom";


const Product = ({product}) => {

    const{ _id, name , brand , type ,price , photo , rating , description} = product;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{description}</p>
                   
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">Details</button></Link>
                        <Link to={`/update/${brand}/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;