import { Hero } from "../../components/hero";
import about from "../../assets/images/about.png";
import about1 from "../../assets/images/about1.png";
import tractor from "../../assets/icons/tractor.png";
import zavod from "../../assets/icons/zavod.png";
import { Button } from "../../components/button";
import icon from "../../assets/icons/icon.svg";
import about2 from "../../assets/images/about2.png";
import { Doira } from "../../assets/icons/doira";
import about3_1 from "../../assets/images/about3.1.png";
import about3_2 from "../../assets/images/about3.2.png";
import about3_3 from "../../assets/images/about3.3.png";
import about3_4 from "../../assets/images/about3.4.png";
import about4_1 from "../../assets/images/about4.1.png";
import about4_2 from "../../assets/images/about4.2.png";
import about4_3 from "../../assets/images/about4.3.png";
import { Facebook } from "../../assets/icons/facebook";
import { Twitter } from "../../assets/icons/twitter";
import { Insta } from "../../assets/icons/insta";
import about5_1 from "../../assets/images/about5.1.png";
import about5_2 from "../../assets/images/about5.2.png";
import about5_3 from "../../assets/images/about5.3.png";
import about5_4 from "../../assets/images/about5.4.png";

export const About = () => {
  return (
    <>
      <Hero image={about} title={"About Us"} />

      <div className="max-w-[1920px] mx-auto mt-[68px]">
        <section className="max-w-[1691px] h-[929px] -ml-[50px]">
          <div className="flex justify-between items-center gap-10">
            <div className="">
              <img className="w-[976px] h-[929px]" src={about1} alt="About" />
            </div>
            <div>
              <div className="w-[675px]">
                <p className="text-green font-third text-[36px] mb-2">
                  About Us
                </p>
                <h2 className="h2 mb-3.5">We do Creative Things for Success</h2>
                <p className="paragraph mb-12">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                  <br />
                  <br />
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="flex justify-between items-center mb-[58px]">
                  <div className="flex gap-[15px] items-center">
                    <img className="w-14 h-13" src={tractor} alt="tractor" />
                    <p className="font-semibold text-[25px] text-primary w-[226px]">
                      Modern Agriculture Equipment
                    </p>
                  </div>
                  <div className="flex gap-[15px] items-center">
                    <img className="w-14 h-13" src={zavod} alt="zavod" />
                    <p className="font-semibold text-[25px] text-primary w-[226px]">
                      No growth hormones are used
                    </p>
                  </div>
                </div>
                <Button size="xl" icon={<img src={icon} />}>
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-[1920px] mx-auto bg-smoke flex justify-center items-center mb-[177px]">
        <div className="max-with-[1400px] mx-auto my-[190px]">
          <div className="flex justify-between items-center gap-[51px] mb-[91px]">
            <div className="w-[671px]">
              <p className="text-[36px] text-green font-third mb-1.5">
                Why Choose us?
              </p>
              <h2 className="h2 text-balance mb-[25px]">
                We do not buy from the open market & traders.
              </h2>
              <p className="paragraph mb-9">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>

              <div className="with-[486px]">
                <div className="with-[486px] mb-6">
                  <div className="flex gap-[7px] items-center w-[339px] h-[81px] bg-gray px-5 rounded-full mb-3">
                    <Doira />
                    <p className="font-semibold text-[20px] text-primary">
                      100% Natural Product
                    </p>
                  </div>
                  <p className="paragraph ml-[60px] mr-5">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>

                <div className="with-[486px] mb-6">
                  <div className="flex gap-[7px] items-center w-[339px] h-[81px] bg-gray px-5 rounded-full mb-3">
                    <Doira />
                    <p className="font-semibold text-[20px] text-primary">
                      Increases resistance
                    </p>
                  </div>
                  <p className="paragraph ml-[60px] mr-5">
                    Filling, and temptingly healthy, our Biona Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img className="w-[678px] h-[579px]" src={about2} alt="about2" />
            </div>
          </div>

          <div className="max-w-[1118px] mx-auto grid grid-cols-4 gap-[30px]">
            <div className="w-[257px] bg-white flex flex-col justify-center items-center rounded-3xl pt-[50px] px-[37px] pb-[19px]">
              <div className="p-[25px] bg-gray rounded-2xl mb-[15px]">
                <img src={about3_1} alt="about" />
              </div>
              <h6 className="h6 mb-3">Return Policy</h6>
              <p className="paragraph text-center text-balance pb-5">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

            <div className="w-[257px] bg-white flex flex-col justify-center items-center rounded-3xl pt-[50px] px-[37px] pb-[19px]">
              <div className="p-[25px] bg-gray rounded-2xl mb-[15px]">
                <img src={about3_2} alt="about" />
              </div>
              <h6 className="h6 mb-3">100% Fresh</h6>
              <p className="paragraph text-center text-balance pb-5">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

            <div className="w-[257px] bg-white flex flex-col justify-center items-center rounded-3xl pt-[50px] px-[37px] pb-[19px]">
              <div className="p-[25px] bg-gray rounded-2xl mb-[15px]">
                <img src={about3_3} alt="about" />
              </div>
              <h6 className="h6 mb-3">Support 24/7</h6>
              <p className="paragraph text-center text-balance pb-5">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="w-[257px] bg-white flex flex-col justify-center items-center rounded-3xl pt-[50px] px-[37px] pb-[19px]">
              <div className="p-[25px] bg-gray rounded-2xl mb-[15px]">
                <img src={about3_4} alt="about" />
              </div>
              <h6 className="h6 mb-3 whitespace-nowrap">Secured Payment</h6>
              <p className="paragraph text-center text-balance pb-5">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1401px] mx-auto mb-[202px]">
        <div className="text-center mb-[42px]">
          <p className="text-[36px] text-green font-third">Team</p>
          <h2 className="h2 mb-4">Our Organic Experts</h2>
          <p className="paragraph text-balance">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[27px]">
          <div className="w-[449px] rounded-3xl bg-smoke hover:cursor-pointer hover:shadow-2xl">
            <img className="w-full" src={about4_1} alt="about" />
            <div className="flex justify-between my-[35px] mx-7">
              <div>
                <h6 className="h6 mb-0.5">Giovani Bacardo</h6>
                <p className="text-green font-third text-[22px]">Farmer</p>
              </div>
              <div className="flex gap-[17px] items-end">
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>

          <div className="w-[449px] rounded-3xl bg-smoke hover:cursor-pointer hover:shadow-2xl">
            <img className="w-full" src={about4_2} alt="about" />
            <div className="flex justify-between my-[35px] mx-7">
              <div>
                <h6 className="h6 mb-0.5">Marianne Loreno</h6>
                <p className="text-green font-third text-[22px]">Designer</p>
              </div>
              <div className="flex gap-[17px] items-end">
                <Insta />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>

          <div className="w-[449px] rounded-3xl bg-smoke hover:cursor-pointer hover:shadow-2xl">
            <img className="w-full" src={about4_3} alt="about" />
            <div className="flex justify-between my-[35px] mx-7">
              <div>
                <h6 className="h6 mb-0.5">Riga Pelore</h6>
                <p className="text-green font-third text-[22px]">Farmer</p>
              </div>
              <div className="flex gap-[17px] items-end">
                <Insta />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto mb-[141px] bg-primary">
        <div className="max-w-[1400px] mx-auto py-[188px] text-center">
          <p className="text-[36px] text-green font-third mb-2">About Us</p>
          <h2 className="text-white text-[50px] font-extrabold mb-[33px]">
            What We Offer for You
          </h2>

          <div className="grid grid-cols-4 gap-[21px]">
            <div className="rounded-2xl ">
              <img className="w-[334px] mb-6" src={about5_1} alt="about" />
              <p className="font-semibold text-[25px] text-white">Spicy</p>
            </div>

            <div className="rounded-2xl ">
              <img className="w-[334px] mb-6" src={about5_2} alt="about" />
              <p className="font-semibold text-[25px] text-white">
                Nuts & Feesd
              </p>
            </div>

            <div className="w-[334px] h-[314px] bg-white rounded-4xl ">
              <img className="mb-6" src={about5_3} alt="about" />
              <p className="font-semibold text-[25px] text-white">Fruits</p>
            </div>

            <div className="w-[334px] h-[314px] bg-white rounded-4xl">
              <img className="mb-6" src={about5_4} alt="about" />
              <p className="font-semibold text-[25px] text-white">Vegetable</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
