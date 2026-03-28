function Hero() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh]">

      <img
        src='src\assets\Banner.jpg'
        alt="Delicious Food"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div> 

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16">
        
        <div className="text-center md:text-left max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Delicious Food, Delivered Fast 
          </h1>
          
          <p className="mt-4 text-md md:text-lg drop-shadow-md">
            Order your favorite meals  anytime, anywhere.
          </p>

          {/* <button className="mt-6 bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg">
            Order Now
          </button> */}
        </div>


      </div>
    </div>
  );
}

export default Hero;