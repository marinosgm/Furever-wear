import axios from "axios";
import ProductDetails from "@/components/ProductDetails";

// Define a type for Product
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  colors: { name: string; value: string; image: string }[];
};

// Fetch product data
const getProduct = async (slug: string): Promise<Product | null> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/products?filter[slug][_eq]=${slug}`
    );
    return response.data.data[0] || null;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
};

// Page Component
const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params; // Await the params object

  // Fetch the product data
  const product = await getProduct(slug);

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params object

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `Product: ${product.name}`,
    description: product.description,
  };
}

// Generate Static Paths
export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/products`
    );
    const products: Product[] = response.data.data;

    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}