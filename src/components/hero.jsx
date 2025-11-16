
export const Hero = ({image, title}) => {
  return (
    <>
      <section
        className="max-w-[1920px] h-[450px] mx-auto bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="h1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h1>
      </section>
    </>
  );
};
