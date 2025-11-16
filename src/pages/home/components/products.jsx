import { Button } from "../../../components/button";
import icon from "../../../assets/icons/icon.svg";
import { ProductCard } from "../../../components/product-card";
import { products } from "../../../data/product";

export const Products = () => {
  return (
    <>
      <section className="max-w-[1400px] mt-44 mx-auto mb-[200px]">
        <p className="font-third text-[36px] text-green text-center">
          Categories{" "}
        </p>
        <h2 className="h2 text-center mt-2 mb-10">Our Products</h2>

        <div className="grid grid-cols-4 gap-5">
          {products.slice(0, 8).map((item) => (
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

        <div className="flex justify-center items-center">
          <Button
            size="xl"
            className="mt-[122px]"
            variant="primary"
            icon={<img src={icon} />}
          >
            Load More
          </Button>
        </div>
      </section>
    </>
  );
};
