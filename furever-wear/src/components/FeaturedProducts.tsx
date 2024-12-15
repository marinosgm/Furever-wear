const FeaturedProducts = () => {
    const products = [
      { id: 1, name: "T-Shirt", description: "Stylish pet-themed t-shirts." },
      { id: 2, name: "Hoodie", description: "Cozy and warm pet-themed hoodies." },
      { id: 3, name: "Mug", description: "Perfect mugs for every pet parent." },
    ];
  
    return (
      <div className="py-16 px-12">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6 max-w-[600px]">
              <h3 className="text-xl font-bold text-orange-500">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
  