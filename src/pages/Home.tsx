import { useNavigate } from "react-router-dom";
import { Banner } from "../component/Banner";
import { TestCard } from "../component/TestCard";

export const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className=" mb-10 md:mb-16">
                    <Banner />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
                    <TestCard image="https://images.unsplash.com/photo-1630406144797-821be1f35d75" unavailable={true} type="Car" onClick={() => {
                        console.log("clicked");
                        navigate('/quiz')
                    }} />
                    <TestCard image="https://images.unsplash.com/photo-1558981000-f294a6ed32b2" type="Motorcycle" />
                    <TestCard image="https://images.unsplash.com/photo-1573057493754-868e061af215" type="Truck" />
                    <TestCard image="https://images.unsplash.com/photo-1570125909517-53cb21c89ff2" type="Bus" />
                </div>
            </div>
        </div>
    )
}