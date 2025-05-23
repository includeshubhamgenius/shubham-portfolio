// import content

import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="bg-white overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 -z-10"
        >
          
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
        <h1 className=" text-[#EAF2FA]">
            {" "}
            <span className="text-dark_primary">{hero.firstName}</span>
          </h1>
          <h2 className="text-cyan-600 text-4xl  mb-10">{hero.title}</h2>
          <br />
         
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            
            alt="..."
            className="h-full object-cover mt-11 mr-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
