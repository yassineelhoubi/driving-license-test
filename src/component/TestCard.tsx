interface Props{
    type:string
    image:string
    unavailable?:boolean 
}
export const TestCard = ({type,image,unavailable }:Props) => {
    return (
        <div>
            <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                <img src={`${image}?auto=format&q=75&fit=crop&crop=top&w=600&h=700`}  loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

                {!unavailable && <div className="flex absolute left-0 bottom-2">
                    <span className="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">unavailable</span>
                </div>}
            </a>

            <div className="flex justify-center items-start gap-2 px-2">
                <a className=" text-center text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">{type}</a>
            </div>
        </div>
    )
}