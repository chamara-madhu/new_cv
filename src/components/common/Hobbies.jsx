import ThreeElephantsImg from "../../assets/images/hobbies/threeElephants.jpg";
import BlackWomanImg from "../../assets/images/hobbies/blackWoman.jpg";
import PotWomanImg from "../../assets/images/hobbies/potWoman.jpg";
import ElephantImg from "../../assets/images/hobbies/elephant.jpg";

const Hobbies = () => {
  const paintings = [
    { src: ThreeElephantsImg, alt: "Three Elephants Painting" },
    { src: BlackWomanImg, alt: "Black Girl Painting" },
    { src: PotWomanImg, alt: "Girl with Pot Painting" },
    { src: ElephantImg, alt: "Colorful Elephant Painting" },
  ];

  return (
    <section id="hobbies" className="py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Hobbies</h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            A collection of my acrylic paintings on canvas.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paintings.map((painting, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={painting.src}
                alt={painting.alt}
                className="w-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
