import footerImg from "../../assets/image/logo-footer.png";
import Newsletter from "../Newsletter/Newsletter";

export default function Footer() {
  return (
    // Main Container
    <div className="px-10 2xl:px-28 bg-[#06091A]">
      {/* Footer Part */}
      <div className="mt-24  pt-48 p-10 mx-auto relative ">
        <img
          className="mx-auto"
          src={footerImg}
          alt="Logo of Donate Bangladesh"
        />
        <footer className="flex flex-col md:flex-row justify-between mt-14 text-white">
          <nav className="space-y-2">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="w-60">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <a className="link link-hover" href="/">
              Home
            </a>
            <a className="link link-hover" href="/services">
              Services
            </a>
            <a className="link link-hover" href="/about">
              About
            </a>
            <a className="link link-hover" href="/contact">
              Contact
            </a>
          </nav>
          <form>
            <h3 className="text-xl font-semibold">Subscribe</h3>
            <fieldset className="form-control w-80">
              <label className="label">
                <span>Subscribe to our newsletter for the latest updates.</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="input input-bordered join-item"
                  aria-label="Email for newsletter subscription"
                />
                <button
                  type="submit"
                  className="btn-free-credit join-item text-black"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>

        {/* Footer Container End*/}
        <Newsletter />
      </div>
      <hr className="mt-4" />
      <p className="text-center py-6 text-white">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
}
