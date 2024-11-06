export default function FrequentlyAskedQuestion() {
  return (
    <div className=" mb-6 mx-auto px-3 bg-white/30 rounded-xl py-8 space-y-4">
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
            We accept credit cards, debit cards, and PayPal for secure and easy
            transactions.
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
            Yes, we offer a 30-day return policy for unused items. Please check
            our return policy for more details.
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
            Yes, we frequently offer discounts and promotions. Subscribe to our
            newsletter to stay updated!
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
            You can see above a FORM feel free to write your queston or problem.
          </p>
        </div>
      </div>
    </div>
  );
}
