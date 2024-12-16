import Navbar from "../navbar/page";

const cards = [
  {
    title: "Tabang Build",
    description: "Tabang mong tanan",
    imgSrc: "/images/build.png",
    link: "./details",
  },
  {
    title: "Tabang Nurse",
    description: "Donate mog dugo",
    imgSrc: "/images/help.png",
    link: "#",
  },
  {
    title: "Luto Humba",
    description: "Kanang lami",
    imgSrc: "/images/healthy-cooking.png",
    link: "#",
  },
  {
    title: "Hatag Please",
    description: "Bisag peso lang",
    imgSrc: "/images/images.png",
    link: "#",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-300">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cards.map((card, index) => (
              <article key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black">
                      <a href={card.link}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {card.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-black">{card.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
