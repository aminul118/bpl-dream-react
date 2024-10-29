import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="absolute -top-32 w-full -left-0">
      <div className="newsletter bg-white rounded-xl px-8 py-12 md:px-24 md:py-16 lg:px-48 lg:py-20 text-center container mx-auto">
        <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="mb-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="join">
          <input
            type="text"
            placeholder="Enter your Email"
            className="input input-bordered join-item"
          />
          <button className="btn-free-credit join-item">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
