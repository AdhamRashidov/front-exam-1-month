import { Hero } from "../../components/hero";
import shop from "../../assets/images/shop.png";
import { products } from "../../data/product";
import { ProductCard } from "../../components/product-card";

export const Shop = () => {
  return (
    <>
      <Hero image={shop} title={"Shop"} />
      <section className="max-w-[1400px] mx-auto mt-[90px] mb-[140px]">
        <div className="grid grid-cols-4 gap-5">
          {products.map((item) => (
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
