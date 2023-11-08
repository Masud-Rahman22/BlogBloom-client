
import { Link } from "react-router-dom";
import swal from "sweetalert";


const WishlistCards = ({ list, wishlist, setWishlist }) => {
    console.log(list);
    const { title, img, shortDescription, category, _id } = list;
    console.log(_id);
    const handleToDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/wishlist/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(list)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your blog has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const remaining = wishlist.filter(item => item._id !== _id)
                            setWishlist(remaining);
                        })
                } else {
                    swal("Your blog is safe!");
                }
            });

    }
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-3 md:mt-10">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src={img}
                    alt="img-blur-shadow"
                />
            </div>
            <div className="p-6">
                <h1 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-blue-500">{category}</h1>
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {shortDescription}
                </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-3">
                <Link to={`/blogDetails/${_id}`}>
                    <button
                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
                        type="button"
                        data-ripple-light="true"
                    >
                        Details
                    </button></Link>
                <button
                    onClick={() => handleToDelete(_id)}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
                    type="button"
                    data-ripple-light="true"
                >
                    Remove Wishlist
                </button>
            </div>
        </div>
    );
};

export default WishlistCards;