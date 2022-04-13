import { useNavigate } from "react-router-dom"

export const Banner = () => {
    let navigate=useNavigate()
    return (
        <div className="flex justify-between items-end gap-4 mb-6">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Drivers license</h2>
            <p onClick={()=>{navigate('login')}} className=" cursor-pointer inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Admin</p>
        </div>
    )
}