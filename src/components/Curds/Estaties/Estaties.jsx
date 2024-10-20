import { useEffect, useState } from "react";
import EstatesCard from "../EstatesCards/EstatesCard";


const Estaties = () => {
    const [categorys, setCategorys] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [hideButton, setHideButton] = useState(false);


    useEffect(() => {
        const loadedData = async () => {
            const url = ('./fakeData.json')
            const res = await fetch(url)
            const data = await res.json();
            setCategorys(data)
        }
        loadedData();
    }, [])

    // handleShow all 
    const handleShowAll = () => {
        setShowAll(true)
        setHideButton(true)
    }
    return (
        <div className="">
            <div className="text-center py-10">
                <h1>SPECIAL FEATURES</h1>
                <h1 className="text-lg md:text-xl font-bold">Features Never Stop</h1>
            </div>

            {/* all curds and condition rendering use */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    showAll ? categorys.map((categorie, idx) => {
                        return (
                            <EstatesCard key={idx}
                                categorie={categorie}
                            ></EstatesCard>
                        )
                    })
                        :
                        categorys.slice(0, 5).map((categorie, idx) => {
                            return (
                                <EstatesCard key={idx}
                                    categorie={categorie}
                                ></EstatesCard>
                            )
                        })
                }
            </div>


            {/* show all button */}
            {
                !hideButton && (
                    <div className="card-actions pt-2 w-full flex justify-center my-6 lg:my-10">
                        <button
                            onClick={handleShowAll}
                            className=" rounded relative inline-flex group items-center justify-center px-8  py-2 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">Show All</span>
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Estaties;