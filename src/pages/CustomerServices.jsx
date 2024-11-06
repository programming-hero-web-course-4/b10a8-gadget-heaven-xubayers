import { useEffect, useRef, useState } from "react";
import Heading from "../utils/Heading";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

export default function CustomerServices() {
  const nameRef = useRef();
  const topicRef = useRef();
  const massegeRef = useRef();
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
    nameRef.current.value = "";
    topicRef.current.value = "";
    massegeRef.current.value = "";
  };

  useEffect(() => {
    document.title = "Costomer Services || Gadget Heaven";
  }, []);
  return (
    <div>
      <div className=" bg-primary px-2 pb-4">
        <div className=" container md:px-8 mx-auto relative text-white px-2 w-full">
          <div className="container mx-auto pt-7">
            <Heading
              title={"Welcome to Customer Service"}
              desc={
                "What would you like help with today? You can quickly take care of most things here, or connect with us when needed. Just write down your thought or problem here."
              }
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-6">
          <form
            className="flex flex-col my-8 lg:w-8/12  md:w-9/12 bg-white p-4 rounded-xl mx-auto gap-5 shadow-sm"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              className="inputF"
              placeholder="Name || Email Address"
              required
              ref={nameRef}
            />
            <input
              type="text"
              placeholder="Topic name"
              className="inputF"
              ref={topicRef}
            />
            <textarea
              placeholder="Your massege..."
              className="resize-none inputF"
              rows={5}
              required
              ref={massegeRef}
            ></textarea>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="bg-primary py-2 rounded-md text-white hover:bg-primary/90 transition-all"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col items-center justify-center">
              <h3 className="font-bold md:text-2xl">Hey, {name}</h3>
              <p className="py-2">Thanks For sending your valuable massage.</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="flex gap-10 px-9">
          <div>
            <FrequentlyAskedQuestion />
          </div>
          <div className="my-auto space-y-2">
            <button className="md:px-8 px-4 w-full items-center gap-3 flex  md:py-5 py-2 rounded-lg bg-white border text-lg ">
              Something Else <FaCircleQuestion />
            </button>
            <button className="md:px-8 px-4 w-full items-center gap-3 flex  md:py-5 py-2 rounded-lg bg-white border text-lg ">
              Payment Methods <MdOutlinePayment />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
