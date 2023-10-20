import {useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {

    const loadForDetails = useLoaderData();
    // console.log(loadForUpdate);
    const{ name , brand , type ,price , photo , rating , description} = loadForDetails;


    const handleCart = () => {
        const cartProduct = { name, photo, brand, price };
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added to cart',
                        showConfirmButton: false,
                        timer: 1500
                      })


                }
            })
    }


    return (
        <div>

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
                        <button onClick={handleCart} className="btn btn-primary">Add to Cart</button>
                        
                    </div>
                </div>
            </div>
            </div>



            <div>
                <h1>Highlights</h1>
                <p>This phone comes with a 6.7 inches LTPO Super Retina XDR OLED 1290 x 2796 pixels screen. It has a double punch-hole design. The back camera is of quad 48+12+12 Megapixel + TOF 3D LiDAR scanner with powerful image processing capability and 4K video recording. The front one is of Dual 12 MP and SL 3D camera.

                    The phone comes with 4323 mAh battery with fast charging facility. It has 6 GB RAM, up to 3.46 GHz Hexa-core CPU and Apple GPU. It is powered by a 4 nm Apple A16 Bionic chip set. The device comes with 128, 256, 512 GB or 1 TB internal storage.</p>
            </div>

        </div>
    );
};

export default Details;