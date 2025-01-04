import { useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import banner from '../assets/banner.jpg'


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <div className="relative my-2 space-y-3 bg-[#9538E2] text-white pt-8 pb-72 mb-72">
                <h1 className="text-5xl w-2/3 mx-auto text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="w-2/3 mx-auto text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn btn-sm flex items-center mx-auto">Shop Now</button>
                <div className="absolute -bottom-40 left-12 md:left-48 border-2 w-2/3 rounded-xl">
                    <img className="w-full mx-auto h-[400px] p-4 rounded-xl" src={banner} alt="" />
                </div>
            </div>
            <div className="grid md:grid-cols-4 border-2">
                <Categories></Categories>
                <Products data={data}></Products>
            </div>
        </div>
    );
};

export default Home;