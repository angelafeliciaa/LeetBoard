export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Problem{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Bank
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Explore our diverse range of engineering interview questions tailored to
        assess skills, problem-solving abilities.
      </p>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          {" "}
          {/* Reduced gap to 2 */}
          {/* First Card */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="sketchfab-embed-wrapper">
              <iframe
                title="3d Printable Pneumatic-Engined Toy Car"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/2d297eed7b24451a8fb47a9372274778/embed?autospin=1&autostart=1"
                width="400"
                height="250"
              >
                {" "}
              </iframe>
            </div>

            {/* <img src={engineimg} alt="Engine" className="w-full h-auto" /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Pneumatic-Engined Toy Car
              </div>
              <p className="text-gray-700 text-base">
                A toy car featuring a double-acting 1-cylinder compressed air
                engine and functional steering.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #automobile
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #car
              </span>
            </div>
          </div>
          {/* Second Card */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="sketchfab-embed-wrapper">
              {" "}
              <iframe
                title="3d Printable Air Balloon Engine for LEGO"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/1879711af3664ef7bc150f90139e8d2a/embed?autospin=1&autostart=1"
                width="400"
                height="250"
              >
                {" "}
              </iframe>{" "}
            </div>

            {/* <img src={engine2} alt="Card Top" className="w-full h-auto" /> */}
            <div
              className="cursor-pointer"
              onClick={() => window.open("https://leetboard-3d.vercel.app/")}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Air Balloon Engine</div>
                <p className="text-gray-700 text-base">
                  Radial Pneumatic Engine assembled with a nitrile glove and two
                  balloons, eliminating the need for bolts.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #balloon
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #motor
                </span>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="sketchfab-embed-wrapper">
              {" "}
              <iframe
                title="Oscillating Cylinder Motor for LEGO (3d Print)"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/f66c6dc8059e4fa2b2a05c421cff81df/embed?autospin=1&autostart=1"
                width="400"
                height="250"
              >
                {" "}
              </iframe>{" "}
            </div>
            {/* <img  src={engine3} alt="Card Top" className="w-full h-auto" /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Oscillating Cylinder Motor
              </div>
              <p className="text-gray-700 text-base">
                Explore the efficiency of an oscillating cylinder steam engine,
                boasting a design that operates seamlessly without the need for
                valve gear.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #cylinder
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #motor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
