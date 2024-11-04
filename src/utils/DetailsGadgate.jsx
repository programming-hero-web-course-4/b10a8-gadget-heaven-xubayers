import Heading from "./Heading";
import Details from "./Details";

export default function DetailsGadgate() {
  return (
    <>
      <section className=" bg-primary mb-60 px-2 2xl:mb-96 md:pb-72 pb-[500px]">
        <div className=" container md:px-8 mx-auto relative text-white px-2  md:pb-0 w-full">
          <div className="container mx-auto pt-7">
            <Heading
              title={
                " Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
              }
              desc={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            />
            {/* details card  */}
            <div>
              <Details />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
