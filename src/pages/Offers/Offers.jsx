

const Offers = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-5xl font-bold mb-9">Ours Offers</h2>
            <div className="flex flex-col md:flex-row gap-7">
                <div className="">
                    <img src="https://img.freepik.com/premium-vector/my-first-friends-funny-textile-stuffed-toys-set-vector-icons-white-background_592022-65.jpg?w=740" alt="" />
                </div>
                <div className="mt-10 sm:w-full md:w-1/2 p-5 space-y-16">
                    <div className="border border-dashed border-red-400 p-5 bg-red-50 flex items-center justify-between gap-7">
                        <div>
                            <img className="md:w-80 md:h-fit w-full h-full rounded" src="https://img.freepik.com/free-photo/cute-fluffy-monkey-toys_23-2149642394.jpg?w=740&t=st=1684510290~exp=1684510890~hmac=0bb8b2211917e2ca2f6280fc2917b9671c16db934863c72fa5c0e96034b6be35" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-red-300">Plush Animal Collection</h2>
                            <p className="text-sm">Snuggle up with our incredibly soft and huggable plush animals. We offer a vast assortment of lovable companions.</p>
                        </div>
                    </div>
                    <div className="border border-dashed border-blue-400 p-5 bg-blue-50 flex items-center justify-between gap-7 mt-8">
                        <div>
                            <img className="md:w-80 md:h-fit w-full h-full rounded" src="https://img.freepik.com/free-photo/front-view-assortment-animals-day_23-2149058024.jpg?w=740&t=st=1684515515~exp=1684516115~hmac=83d3df6a39780374d4433ba35fc30c2c10cd2021c143395b1681eb06d9dd12fc" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-blue-300">Wildlife Animal Sets</h2>
                            <p className="text-sm">Foster a love for nature and wildlife. These sets include accessories to create a vibrant and interactive wildlife environment.</p>
                        </div>
                    </div>
                    <div className="border border-dashed border-green-400 p-5 bg-green-50 flex items-center justify-between gap-7 mt-8">
                        <div>
                            <img className="md:w-80 md:h-fit w-full h-full rounded" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-sudoku-template_23-2149308808.jpg?w=740&t=st=1684515739~exp=1684516339~hmac=6c1fff6bbc1e926527b88611cbd05681022ec2b3d12f615c4afb693af7986a85" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-green-300">Animal Pets and Games</h2>
                            <p className="text-sm">Develop problem-solving skills and have fun with our animal-themed puzzles and games. Whether featuring adorable animals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;