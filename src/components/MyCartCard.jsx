import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const MyCartCard = ({ card , carts , setCarts }) => {

    const { name, photo, brand, price, _id } = card;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Remove'
        })
        .then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Removed From Cart',
                                'success'
                            )
                            const remaining = carts.filter(c => c._id !== _id);
                           setCarts(remaining);
                        }
                    })

            }
        })
    }
    


        return (
            <div className="bg-base-100 shadow-xl md:flex justify-between items-center px-5 py-2">
                <figure className="">
                    <img src={photo} alt="" className="rounded-xl border h-48" />
                </figure>
                <div className="mx-5 md:mx-0">
                    <h2 className="card-title mb-2">{name}</h2>
                    <p className="">{brand}</p>
                    <p className="my-2">Price :{price} Tk</p>
                    <div className="card-actions">
                        <button className="border hover:border-[#331A15] text-[#331A15] p-1 rounded">Order Now</button>
                        <button onClick={() => handleDelete(_id)} className="border hover:border-[#331A15] text-[#331A15] p-1 rounded">X</button>

                    </div>
                </div>
            </div>
        );
    };


    MyCartCard.propTypes = {
        card : PropTypes.object,
        carts : PropTypes.array,
        setCarts : PropTypes.func,

    }

    export default MyCartCard;