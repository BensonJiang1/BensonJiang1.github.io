import { styles } from "../styles";
import { react } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#69C9D0]' />
          <div className='w-1 sm:h-80 h-40 aqua-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#EE1D52]'>Benson</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D games <br className='sm:block hidden' />
            and models
          </p>
        </div>

        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, necessitatibus?
          </p>
          <img src={react}/>
          </div>
      </div>

      
    </section>
  );
};

export default Hero;
