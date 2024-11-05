import { useRef, useState } from "react";
import Heading from "../utils/Heading";

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
      <div className="mt-6">
        <form
          className="flex flex-col my-8 md:w-9/12 bg-white p-4 rounded-xl mx-auto gap-5 shadow-sm"
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
      <div className="w-4/5 mb-6 mx-auto px-3 bg-white/30 rounded-xl py-8 space-y-4">
        <h2 className="mx-auto text-xl font-bold text-center mt-20 mb-8">
          Frequently Ask Question
        </h2>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept credit cards, debit cards, and PayPal for secure and
              easy transactions.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How long does shipping take?
          </div>
          <div className="collapse-content">
            <p>
              Standard shipping typically takes 5-7 business days. Expedited
              options are available at checkout.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I return or exchange an item?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer a 30-day return policy for unused items. Please
              check our return policy for more details.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do your products come with a warranty?
          </div>
          <div className="collapse-content">
            <p>
              Most of our products come with a one-year manufacturers warranty.
              Please refer to the product details for specifics.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content">
            <p>
              After your order is shipped, we’ll send you a tracking number via
              email so you can monitor its delivery status.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any discounts available?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we frequently offer discounts and promotions. Subscribe to
              our newsletter to stay updated!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            I dont find My question or ans what I can do
          </div>
          <div className="collapse-content">
            <p>
              You can see above a FORM feel free to write your queston or
              problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
