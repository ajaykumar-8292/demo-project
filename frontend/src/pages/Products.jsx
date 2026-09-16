import {
  FaMobileAlt,
  FaLaptopCode,
  FaDatabase,
  FaCloud
} from "react-icons/fa";

function Products() {
  const products = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile App",
      description:
        "Modern and user-friendly mobile applications for Android and iOS."
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Applications",
      description:
        "Fast, responsive and scalable web applications for businesses."
    },
    {
      icon: <FaDatabase />,
      title: "Business Management",
      description:
        "Powerful software solutions to manage your business efficiently."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Secure and reliable cloud-based solutions for your organization."
    }
  ];






  return(
   <section className="min-h-screen bg-black px-5 py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-[#E4A45B] text-sm font-semibold tracking-[3px]">
          OUR PRODUCTS
        </span>

        <h1 className="text-white text-4xl md:text-5xl font-bold font-sans mt-3">
          Innovative Products
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          We build powerful digital products that help businesses
          grow, automate and succeed.
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-[#111827] border border-gray-700 rounded-xl p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#E4A45B] hover:shadow-[0_0_20px_rgba(228,164,91,0.25)]"
          >

            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E4A45B]/10 text-[#E4A45B] text-3xl transition duration-300 group-hover:scale-110">
              {product.icon}
            </div>

            {/* Title */}
            <h2 className="text-white text-xl font-bold mt-5">
              {product.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6 mt-3">
              {product.description}
            </p>

            {/* Button */}
            
            <button className="mt-5 px-5 py-2 border border-[#E4A45B] text-[#E4A45B] rounded-lg text-sm hover:bg-[#E4A45B] hover:text-black transition duration-300">
              Learn More
            </button>
           

          </div>
        ))}

      </div>
    </section>
  );
}

export default Products;