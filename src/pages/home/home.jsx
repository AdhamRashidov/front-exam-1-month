import home1 from "../../assets/images/home1.png";
import { Button } from "../../components/button";
import icon from "../../assets/icons/icon.svg";
import home2_1 from "../../assets/images/home2.1.png";
import home2_2 from "../../assets/images/home2.2.png";
import home3 from "../../assets/images/home3.png";
import home3_1 from "../../assets/icons/home3.1.png";
import home3_2 from "../../assets/icons/home3.2.png";
import { Products } from "./components/products";
import home5 from "../../assets/images/home5.png";
import home5_1 from "../../assets/images/home5.1.png";
import { Star } from "../../assets/icons/star";
import { organics } from "../../data/product";
import { ProductCard } from "../../components/product-card";
import home6 from "../../assets/images/home6.png";
import home7_1 from "../../assets/images/home7.1.png";
import home7_2 from "../../assets/images/home7.2.png";
import home7_3 from "../../assets/images/home7.3.png";
import home8_1 from "../../assets/images/home8.1.png";
import home8_2 from "../../assets/images/home8.2.png";
import { User } from "../../assets/icons/user.jsx";

export const Home = () => {
  return (
    <>
      <div
        className="h-[898px] w-[1920px] mx-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${home1})` }}
      >
        <section className="container relative">
          <div className="absolute w-[530px] top-[246px] ">
            <p className="font-third text-green text-[36px]">
              100% Natural Food
            </p>
            <h1 className="h1  mb-[23px] mt-2">
              Choose the best healthier way of life
            </h1>
            <Button size="lg" variant="yellow" icon={<img src={icon} />}>
              Explore Now
            </Button>
          </div>
        </section>
      </div>

      <section className="flex justify-between gap-9 max-w-[1436px] mx-auto mt-[154px] mb-[190px] h-[367px]">
        <div className="relative">
          <img className="w-[682px] h-[367px]" src={home2_1} alt="home2.1" />
          <div className="absolute max-w-[278px] top-[109px] left-[55px]">
            <p className="font-third font-normal text-[36px] text-white mb-[5px]">
              Natural!!
            </p>
            <h1 className="text-white font-extrabold text-[40px]">
              Get Garden Fresh Fruits
            </h1>
          </div>
        </div>
        <div className="relative">
          <img className="w-[682px] h-[367px]" src={home2_2} alt="home2.2" />
          <div className="absolute max-w-[278px] top-[109px] left-[55px]">
            <p className="font-third font-normal text-[36px] text-green mb-[5px]">
              Offer!!
            </p>
            <h1 className="h3">Get 10% off on Vegetables</h1>
          </div>
        </div>
      </section>

      <section className="h-[1067px] w-[1920px] mx-auto bg-smoke flex items-center justify-center">
        <div className="w-[911px] h-[867px]">
          <img src={home3} alt="" />
        </div>
        <div className="w-[702px]">
          <p className="font-third text-[36px] text-green mb-2">About Us</p>
          <h2 className="h2 mb-3.5">
            We Believe in Working Accredited Farmers
          </h2>
          <p className="paragraph mb-[46px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className="mb-[46px]">
            <div className="flex justify-between mb-[30px] h-[101px] gap-[19px]">
              <div className="flex justify-center items-center w-[101px] h-[101px] bg-white rounded-3xl">
                <span>
                  <img src={home3_1} alt="home3.1" />
                </span>
              </div>
              <div>
                <h6 className="h6">Organic Foods Only</h6>
                <p className="paragraph text-balance">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex justify-between h-[101px] gap-[19px]">
              <div className="flex justify-center items-center w-[101px] h-[101px] bg-white rounded-3xl">
                <span>
                  <img src={home3_2} alt="home3.2" />
                </span>
              </div>
              <div>
                <h6 className="h6">Quality Standards</h6>
                <p className="paragraph text-balance">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <Button size="xl" variant="primary" icon={<img src={icon} />}>
            Shop Now
          </Button>
        </div>
      </section>

      <Products />

      <section
        className="max-w-[1920px] h-[1267px] mx-auto bg-cover bg-no-repeat bg-center
		flex justify-center items-center"
        style={{ backgroundImage: `url(${home5})` }}
      >
        <div className="w-[1108px] mx-auto">
          <p className="font-third text-center text-green font-normal text-[36px] mb-2">
            Testimonial
          </p>
          <h2 className="h2 text-center mb-[60px]">
            What Our Customer Saying?
          </h2>
          <div className="flex justify-center mb-5">
            <img className="w-[115px] h-[115px]" src={home5_1} alt="home5.1" />
          </div>
          <div className="flex justify-center gap-1 mb-[25px]">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} />
            ))}
          </div>
          <div className="flex justify-center mb-5">
            <p className="paragraph text-center w-[780px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
          </div>
          <p className="font-semibold text-[25px] text-primary text-center">
            Sara Taylor
          </p>
          <p className="paragraph text-center mb-[19px]">Consumer</p>

          <div className="flex justify-center gap-1.5 mb-[102px]">
            <span className="p-1 bg-gray rounded-full"></span>
            <span className="p-1 bg-green rounded-full"></span>
            <span className="p-1 bg-gray rounded-full"></span>
          </div>
          <hr className="text-gray mb-[102px]" />

          <div className="max-w-[1030px] mx-auto flex justify-between items-center">
            <div className="w-[211px] h-[211px] bg-ligthGreen flex flex-col justify-center items-center rounded-full border-5 border-green">
              <h2 className="h2 text-center">100%</h2>
              <p className="font-secondary font-semibold text-[18px] text-center text-primary">
                Organic
              </p>
            </div>
            <div className="w-[211px] h-[211px] bg-ligthGreen flex flex-col justify-center items-center rounded-full border-5 border-green">
              <h2 className="h2 text-center">285</h2>
              <p className="font-secondary font-semibold text-[18px] text-center text-primary">
                Active Product
              </p>
            </div>
            <div className="w-[211px] h-[211px] bg-ligthGreen flex flex-col justify-center items-center rounded-full border-5 border-green">
              <h2 className="h2 text-center">350+</h2>
              <p className="font-secondary font-semibold text-[18px] text-center text-primary">
                Organic Orchads
              </p>
            </div>
            <div className="w-[211px] h-[211px] bg-ligthGreen flex flex-col justify-center items-center rounded-full border-5 border-green">
              <h2 className="h2 text-center">25+</h2>
              <p className="font-secondary font-semibold text-[18px] text-center text-primary">
                Years of Farming
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto bg-[#274c5b]">
        <div className="max-w-[1400px] mx-auto py-[200px]">
          <div className="flex justify-between items-end mb-[50px]">
            <div>
              <p className="text-green font-third text-[36px]">Offer</p>
              <h2 className="font-extrabold text-[50px] text-white">
                We Offer Organic For You
              </h2>
            </div>
            <div>
              <Button size="xl" variant="yellow" icon={<img src={icon} />}>
                View All Product
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {organics.map((item) => (
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
        </div>
      </section>

      <div className="flex max-w-[1920px] mx-auto">
        <section className="max-w-[1660px] h-[931px] ml-[51px] relative">
          <div>
            <img src={home6} alt="home6" />
          </div>
          <div className="absolute bg-white w-[789px] py-[78px] pl-[89px] top-1/2 -translate-y-1/2 left-216 rounded-4xl">
            <div className="w-[700px]">
              <p className="text-green font-third text-[36px] mb-2">
                Eco Friendly
              </p>
              <h2 className="h2 text-balance">
                Econis is a Friendly Organic Store
              </h2>
              <p className="text-primary font-primary font-medium text-[25px] mt-[35px] mb-[7px]">
                Start with Our Company First
              </p>
              <p className="paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <p className="text-primary font-primary font-medium text-[25px] mt-[35px] mb-[7px]">
                Learn How to Grow Yourself
              </p>
              <p className="paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <p className="text-primary font-primary font-medium text-[25px] mt-[35px] mb-[7px]">
                Farming Strategies of Today
              </p>
              <p className="paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-[1920px] mx-auto bg-ligthGreen">
        <div className="w-full py-[187px] grid grid-cols-3 gap-[42px]">
          <div className="relative h-[583px]">
            <img src={home7_1} alt="image" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-smoke rounded-2xl">
              <Button size="xl" variant="outline">
                Organic Juice
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={home7_2} alt="image" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-smoke rounded-2xl">
              <Button size="xl" variant="outline">
                Organic Food
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={home7_3} alt="image" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-smoke rounded-2xl">
              <Button size="xl" variant="outline">
                Nuts Cookis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto">
        <div className="mb-[185px]">
          <div className="mb-12">
            <p className="text-green font-third text-[36px] mb-2">News</p>
            <div className="flex justify-between items-end">
              <div className="w-[702px]">
                <h2 className="h2">
                  Discover weekly content about organic food, & more
                </h2>
              </div>
              <div>
                <Button size="lg" variant="outline" icon={<img src={icon} />}>
                  More News
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between gap-[46px]">
              <div className="relative">
                <img src={home8_1} alt="home8.1" />
                <div
                  className="absolute bg-white w-[613px] rounded-3xl left-1/2 -translate-x-1/2 top-63
								shadow-xl"
                >
                  <div className="w-[499px] mx-auto mt-[46px] mb-[60px]">
                    <div className="flex items-center gap-[13px] mb-[15px]">
                      <User />
                      <p className="paragraph">By Rachi Card</p>
                    </div>
                    <h6 className="h6 mb-0.5">
                      The Benefits of Vitamin D & How to Get It
                    </h6>
                    <p className="paragraph mb-[15px]">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                    <Button
                      size="lg"
                      variant="yellow"
                      icon={<img src={icon} />}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="absolute w-[100px] h-[100px] bg-smoke rounded-full flex flex-col justify-center items-center top-[43px] left-8">
                  <h6 className="h6">25</h6>
                  <h6 className="h6">Nov</h6>
                </div>
              </div>

              <div className="relative">
                <img src={home8_2} alt="home8.2" />
                <div
                  className="absolute bg-white w-[613px] rounded-3xl left-1/2 -translate-x-1/2 top-63
								shadow-xl"
                >
                  <div className="w-[499px] mx-auto mt-[46px] mb-[60px]">
                    <div className="flex items-center gap-[13px] mb-[15px]">
                      <User />
                      <p className="paragraph">By Rachi Card</p>
                    </div>
                    <h6 className="h6 mb-0.5">
                      Our Favourite Summertime Tommeto
                    </h6>
                    <p className="paragraph mb-[15px]">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                    <Button
                      size="lg"
                      variant="yellow"
                      icon={<img src={icon} />}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="absolute w-[100px] h-[100px] bg-smoke rounded-full flex flex-col justify-center items-center top-[43px] left-8">
                  <h6 className="h6">25</h6>
                  <h6 className="h6">Nov</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
