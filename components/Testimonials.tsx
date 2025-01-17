import Image from "next/image";

const testimonials = [
  [
    {
      content: "So good! I need this right now. Congrats on the launch!",
      link: "",
      author: {
        name: "Eve Porcello",
        role: "",
        image: "/eve.jpg",
      },
    },

     {
      content:
        "DecorAI transformed my design process. With their AI tools, I was able to experiment with different layouts and colors, saving me time and effort. The personalized recommendations were spot-on, and the virtual room visualization was a game-changer.",
      link: "",
      author: {
        name: "John James",
        role: "",
        image: "/johnny.jpg",
      },
    },
  ],
  [
    {
      content:
        "This is incredible, you don't need an interior designer anymore.",
      link: "",
      author: {
        name: "Ade Dada",
        role: "",
        image: "/ade.jpeg",
      },
    },
     {
      content:
        "I've always struggled with visualizing my design ideas. DecorAI's platform gave me the confidence to bring my vision to life. The design recommendations were fantastic, and I couldn't be happier with the end result.",
      link: "",
      author: {
        name: "Michelle Palmer",
        role: "",
        image: "/michellep.jpg",
      },
    },
  ],
  [
    {
      content:
        "This is fantastic. I've already decided on a new wall color from a generated image and repainting it is now my weekend project.",
      link: "",
      author: {
        name: "Andrew Schulz",
        role: "",
        image: "/music.jpg",
      },
    },
   {
      content: "Thanks to DecorAI, my living room has been completely transformed into a stylish and inviting space.",
      link: "",
      author: {
        name: "Smith Taylor",
        role: "",
        image: "/smit.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            Loved by many worldwide.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
            See what our users are saying about the product.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out "
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-gray-600 p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-white">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-gray-400">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
