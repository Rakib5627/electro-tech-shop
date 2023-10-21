import Swal from "sweetalert2";

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;


        const product = { name, photo, brand, type, price, rating, description };
        console.log(product);

        fetch('https://electro-tech-server-8dovk83tm-rakib5627.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                

                }
            })

    }


    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Add a New Product</h2>
            <form onSubmit={handleAddProduct}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">

                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                <div className="md:flex mb-8">
                    
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                   
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <select type="text" name="brand" placeholder="Brand" className="input input-bordered w-full">
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Sony">Sony</option>
                                <option value="Siemens">Siemens</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                        <select type="text" name="rating" placeholder="Rating" className="input input-bordered w-full">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                              
                            </select>
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Write short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Add Product" className="btn btn-block bg-[#3ecec0] hover:bg-[#2eb7a9] hover:border-[#331A15] text-[#331A15]" />


            </form>
        </div>
    );
};

export default AddProduct;