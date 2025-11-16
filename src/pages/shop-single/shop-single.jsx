import { useNavigate, useParams } from "react-router-dom";
import { products, organics } from "../../data/product";
import { Button } from "../../components/button";
import { Hero } from "../../components/hero";
import notFound from "../../assets/images/shopSingle.png";
import { Star } from "../../assets/icons/star.jsx";
import { useState } from "react";
import { ProductCard } from "../../components/product-card.jsx";
import shop from "../../assets/images/shopSingle.png";

export const ShopSingle = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const { id } = useParams();
  const navigate = useNavigate();

  let product = products.find((item) => item.id === Number(id));

  if (!product) {
    product = organics.find((item) => item.id === Number(id));
  }

  if (!product) {
    return (
      <div className="py-10">
        <Hero image={notFound} title={"404 Not Found"} />
        <div className="container flex items-center justify-between">
          <h1 className="h1 my-10">Mahsulotlar topilmadi</h1>
          <Button onClick={() => navigate("/")} size="xl" variant="outline">
            Bosh sahifaga Qaytish
          </Button>
        </div>
      </div>
    );
  }

  return (
	  <>
		<Hero image={shop} title={"Shop Single"}/>

      <section className="py-10">
        <div className="container">
          <div className="relative flex justify-between items-center gap-8 rounded-3xl">
            <Button
              className="absolute top-10 left-10 "
              size="sm"
              variant="primary"
            >
              {product.category}
            </Button>

            <div className="w-1/2">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <h3 className="font-semibold text-primary text-[40px] mb-2">
                {product.name}
              </h3>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: product.rating }, (_, index) => (
                  <Star key={index} />
                ))}
              </div>

              <div className="flex gap-4 items-center mb-6">
                <p className="text-gray text-xl line-through">{`$${product.oldPrice}`}</p>
                <p className="text-primary font-bold text-2xl">{`$${product.price}`}</p>
              </div>

              <p className="paragraph mb-6">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>

              <div className="flex gap-10 items-center">
                <h6 className="h6">Quantity:</h6>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={handleDecrement}>
                    -
                  </Button>
                  <span className="px-4 font-semibold">{count}</span>
                  <Button size="sm" variant="outline" onClick={handleIncrement}>
                    +
                  </Button>
                </div>
                <Button size="xl" variant="primary">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1137px] mx-auto mb-[140px]">
        <div>
          <div className="flex justify-center items-center gap-5 mb-[27px]">
            <Button size="xl" variant="primary">
              Product Description
            </Button>
            <button
              size="xl"
              className="bg-ligthGreen px-[85px] py-[30px] text-xl rounded-2xl text-dark text-[25px] font-bold"
            >
              Additional Info
            </button>
          </div>
          <div>
            <p className="paragraph text-center">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto mb-[140px]">
			  <h1 className="h1 text-center mb-10">Related Products</h1>
			  
        <div className="grid grid-cols-4 gap-5">
          {products.slice(0, 4).map((item) => (
            <div className="w-full h-full">
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                oldPrice={item.oldPrice}
                price={item.price}
                rating={item.rating}
                img={item.img}
              />
            </div>
          ))}
			  </div>
			  
      </section>
    </>
  );
};
