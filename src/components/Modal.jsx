/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

export default function Modal({ closeAndRfreshPage, cost }) {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center items-center">
          <div className="md:text-7xl text-4xl mb-3 text-green-500">
            <FaCheckCircle />
          </div>
          <h3 className="font-bold md:text-2xl text-xl">
            Payment Successfully
          </h3>
          <p className="py-2">Thanks for Purchasing</p>
          <p>Total: ${cost.toFixed(2)} </p>
          <div className="modal-action w-full">
            <form
              method="dialog"
              className="w-full"
              onSubmit={closeAndRfreshPage}
            >
              <button className="py-2 hover:bg-slate-200 rounded-full bg-slate-300 w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
