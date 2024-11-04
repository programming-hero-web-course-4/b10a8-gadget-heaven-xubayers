import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  const navigateToDashBoard = () => {
    navigate("/dashboard");
  };
  return (
    <section className="bg-primary text-white md:mx-8  mx-3 px-2 rounded-bl-2xl rounded-br-2xl md:pb-0 pb-16">
      <div className="container mx-auto pt-7">
        <div className="w-full container mx-auto px-2 flex flex-col justify-center items-center text-center">
          <h1 className="lg:w-9/12 md:min-w-11/12 2xl:text-6xl xl:text[50px] lg:text-5xl md:text-4xl text-2xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="lg:w-7/12 md:w-9/12 mt-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={navigateToDashBoard}
            className="px-6 my-5 py-2 rounded-full bg-white text-black hover:bg-white/85 font-bold -mb-48"
          >
            Shop Now
          </button>
        </div>
        <div>
          <div className="md:p-5 p-2 rounded-2xl md:w-9/12 2xl:h-[600px]  lg:h-[500px] md:h-[400px] mx-auto border-2 overflow-hidden border-gray/70 bg-gray-100/30 relative top-56">
            <img
              src="/assets/banner.jpg"
              className=" rounded-2xl h-full w-full  object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
