const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-[200px] text-center font-titillium"
      style={{ backgroundImage: "url('/assets/bgxmas.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to <span className="text-blue-400">Furever-Wear</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Explore our premium collection of pet-themed apparel and accessories, designed for
          pet lovers like you!
        </p>
        <div>
          <a
            href="/shop"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;