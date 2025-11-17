import { Link } from "react-router-dom";
import { Button } from "./button";
import { Star } from "../assets/icons/star.jsx";

export const ProductCard = ({
  id,
  name,
  category,
  oldPrice,
  price,
  rating,
  img,
}) => {
  return (
    <div className="relative w-[335px] h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl">
      <Link to={`/shop-single/${id}`}>
        <div className="border border-smoke rounded-3xl">
          <div className="absolute top-5 left-5">
            <Button size="sm" variant="primary">
              {category}
            </Button>
          </div>
          <img
            className="w-full h-[350px] mt-[73px] mb-0.5"
            src={img}
            alt="image"
          />
          <div className="max-w-[280px] mx-auto">
            <div className="mb-[13px]">
              <h1 className="font-semibold text-[20px] text-primary">{name}</h1>
            </div>
            <div className="flex justify-between items-center mt-1.5 mb-[17px] pt-2 border-t border-gray">
              <div className="flex gap-[7px] justify-between items-center">
                <p className="text-gray text-[15px] line-through">{`$${oldPrice}`}</p>
                <p className="text-primary font-bold text-[18px]">{`$${price}`}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: rating }, (_, index) => (
                  <Star key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
