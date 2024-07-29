"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/img9.jpg", alt: "Image 1", title: "Stunning Landscape" },
    { src: "/img2.jpg", alt: "Image 2", title: "Vibrant Cityscape" },
    { src: "/img3.jpg", alt: "Image 3", title: "Serene Nature" },
    { src: "/img4.jpg", alt: "Image 4", title: "Architectural Wonder" },
    { src: "/img5.jpg", alt: "Image 5", title: "Stunning Landscape" },
    { src: "/img6.jpg", alt: "Image 6", title: "Vibrant Cityscape" },
    { src: "/img7.jpg", alt: "Image 7", title: "Serene Nature" },
    { src: "/img8.jpg", alt: "Image 8", title: "Architectural Wonder" },
    { src: "/img10.jpg", alt: "Image 10", title: "Serene Nature" },
    { src: "/img12.jpg", alt: "Image 12", title: "Architectural Wonder" },
  ];

  const openModal = (index: any) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const previousImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 4) % images.length);
  };

  const displayedImages = images.slice(
    currentImageIndex,
    currentImageIndex + 4
  );

  return (
    <section className="container mx-auto py-8 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-60 md:h-72 lg:h-80 object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer"
              onClick={() => openModal(currentImageIndex + index)}
            />
            <div className="absolute inset-x-0 bottom-0 bg-background/80 px-4 py-3 transition-all duration-300 group-hover:bg-background/90">
              <h3 className="text-base font-medium text-foreground line-clamp-1">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        <button
          className="px-4 py-2 flex items-center bg-red-500 rounded-lg"
          onClick={previousImages}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Wstecz
        </button>
        <button
          className="px-4 py-2 flex items-center bg-red-500 rounded-lg"
          onClick={nextImages}
        >
          Dalej
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur"
          onClick={closeModal}
        >
          <div className="relative bg-[#E84545] p-6 rounded-lg">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-base font-medium text-foreground">
              {images[currentImageIndex].title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}
