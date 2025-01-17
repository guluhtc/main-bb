import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { SuitableFor } from "../components/SuitableFor";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>DecorAI</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Generating dream rooms{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your room and see how your room looks in different
          themes. DecorAI.xyz remodel your room today.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Generate your dream room
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Sketch Room</h3>
                <Image
                  alt="Original photo of a room with DecorAI.xyz"
                  src="/sketch.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with DecorAI.xyz"
                  width={400}
                  height={400}
                  src="/sketch-gen.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Empty Room</h3>
                <Image
                  alt="Original photo of a room with DecorAI.xyz"
                  src="/empty.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with DecorAI.xyz"
                  width={400}
                  height={400}
                  src="/empty-gen.png"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with DecorAI.xyz"
                  src="/1.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with DecorAI.xyz"
                  width={400}
                  height={400}
                  src="/1-new.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
<div className="py-24 sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-400">Time Efficiency</dt>
        <dt className="text-base leading-7 text-gray-300">A simple room designed by an interior designer typically takes 2-4 hours, whereas AI interior design can accomplish the same task in just 5-10 seconds. This means that using AI interior design can save an impressive amount of time compared to the manual efforts of a designer.</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Up to 99.97%</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-400">Cost Saving</dt>
        <dt className="text-base leading-7 text-gray-300">DecorAI.xyz is a cost-effective alternative, with prices as low as $0.2 per design, compared to the typical cost of $500-$1000 for a room when working with a traditional interior designer.</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Up to 99.95%</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-400">AI dataset trained</dt>
        <dt className="text-base leading-7 text-gray-300">With its exceptional training on a massive dataset of 160 million design samples, DecorAI brings a new level of sophistication to the world of home decor. This cutting-edge AI system harnesses the power of machine learning and deep neural networks to generate stunning design concepts, optimize spatial layouts, and provide personalized suggestions.</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">160 million</dd>
      </div>
    </dl>
  </div>
</div>
      <SuitableFor/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
