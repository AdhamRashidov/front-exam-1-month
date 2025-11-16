import subscribe from "../assets/images/sunscribe.png";
import { Button } from "./button";

export const Subscribe = () => {
  return (
    <>
      <section
        className="flex items-center max-w-[1400px] h-[323px] mx-auto bg-cover bg-no-repeat bg-center rounded-4xl"
        style={{ backgroundImage: `url(${subscribe})` }}
      >
        <div className="flex justify-between items-center max-w-[1258px] mx-auto w-full">
          <div className="w-[357px]">
            <h1 className="font-extrabold text-white text-[50px]">
              Subscribe to our Newsletter
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <div>
              <input
                className="outline-none w-[400px] h-24 bg-smoke rounded-xl px-10 
							placeholder:text-gray text-xl italic"
                placeholder="Your Email Address"
                type="email"
              />
            </div>
            <div>
              <Button size="xl">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
