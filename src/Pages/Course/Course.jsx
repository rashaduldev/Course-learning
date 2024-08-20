const Course = () => {
    return (
        <div className="my-5">
            <h1 className="text-center text-5xl font-bold py-3">One payment get all courses</h1>
            <p className="text-center py-3 text-gray-500">Unlock unlimited access to our entire library with a single payment. Plus, enjoy complimentary <br /> access to all forthcoming courses at <a className="text-[#B6CD26] font-bold">no extra cost!</a></p>
            {/* Card */}
            <div>

                <div className="card card-compact bg-base-100 w-96 shadow-xl my-10">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;