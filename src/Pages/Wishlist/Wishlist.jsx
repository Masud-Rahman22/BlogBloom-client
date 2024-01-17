import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import WishlistCards from "./WishlistCards";



const Wishlist = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        axios.get(`https://blog-bloom-server.vercel.app/wishlist?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setWishlist(res.data)
            })
    }, [user?.email])
    console.log(wishlist);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:ml-20 md:my-10 mt-14 md:mt-1">
            {
                wishlist?.map(list => <WishlistCards key={list._id} list={list} wishlist={wishlist} setWishlist={setWishlist}></WishlistCards>)
            }
        </div>

    );
};

export default Wishlist;
