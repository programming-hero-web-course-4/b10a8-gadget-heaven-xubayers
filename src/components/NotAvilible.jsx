import { CgUnavailable } from "react-icons/cg";

export default function NotAvilible() {
  return (
    <div className="flex justify-center items-center flex-col  h-full">
      <CgUnavailable className="text-6xl text-orange-600" />
      <h2 className="text-xl text-orange-600 font-bold">Not Availible</h2>
    </div>
  );
}
