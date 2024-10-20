

const ChooseCategoryCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="w-full lg:w-[380px] h-[320px] lg:h-[350px] flex justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-emerald-900 hover:text-white">
                <div>
                    <figure className="flex justify-center">
                        <img className="hover:bg-white hover:p-4 hover:rounded" src="https://i.ibb.co/S6GzcVh/f-2.png" alt="" />
                    </figure>
                    <div className="text-center">
                        <h1 className="font-bold">house</h1>
                        <p>3 properties</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[380px] h-[320px] lg:h-[350px] flex justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-emerald-900 hover:text-white">
                <div>
                    <figure className="flex justify-center">
                        <img className="hover:bg-white hover:p-4 hover:rounded" src="https://i.ibb.co/zHyXV3h/f-1.png" alt="" />
                    </figure>
                    <div className="text-center">
                        <h1 className="font-bold">apartment</h1>
                        <p>1 properties</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[380px] h-[320px] lg:h-[350px] flex justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-emerald-900 hover:text-white">
                <div>
                    <figure className="flex justify-center">
                        <img className="hover:bg-white hover:p-4 hover:rounded" src="https://i.ibb.co/MCYHwPT/f-4.png" alt="" />
                    </figure>
                    <div className="text-center">
                        <h1 className="font-bold">community</h1>
                        <p>2 properties</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[380px] h-[320px] lg:h-[350px] flex justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-emerald-900 hover:text-white">
                <div>
                    <figure className="flex justify-center">
                        <img className="hover:bg-white hover:p-4 hover:rounded" src="https://i.ibb.co/sgVsZwL/f-5-1.png" alt="" />
                    </figure>
                    <div className="text-center">
                        <h1 className="font-bold">townhouse</h1>
                        <p>4 properties</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[380px] h-[320px] lg:h-[350px] flex justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-emerald-900 hover:text-white">
                <div>
                    <figure className="flex justify-center">
                        <img className="hover:bg-white hover:p-4 hover:rounded" src="https://i.ibb.co/CBzG8Z1/f-7.png" alt="" />
                    </figure>
                    <div className="text-center">
                        <h1 className="font-bold">building</h1>
                        <p>3 properties</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ChooseCategoryCard;
