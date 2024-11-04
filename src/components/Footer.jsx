export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Gadget Heaven</h2>
        <p className="text-gray-600 mt-2 border-b pb-4">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-sm text-gray-700">
          <div>
            <h3 className="footerCategories">Services</h3>
            <ul className="mt-2 space-y-2">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="footerCategories">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="footerCategories">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
