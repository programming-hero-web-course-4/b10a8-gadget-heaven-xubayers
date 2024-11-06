/* eslint-disable react/prop-types */
export default function Heading({ title, desc }) {
  return (
    <div className="w-full  flex flex-col justify-center items-center text-center">
      <div>
        <h1 className="lg:w-9/12 container mx-auto px-2 mt-5 md:min-w-11/12 2xl:text-6xl xl:text[50px]  md:text-3xl text-2xl sm:text-xl font-bold">
          {title}
        </h1>
        <p className="lg:w-10/12 md:w-9/12 mt-5 mx-auto">{desc}</p>
      </div>
    </div>
  );
}
