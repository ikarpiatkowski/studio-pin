'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

interface ModalProps {
  image: ImageData | null;
  onClose: () => void;
}

const images = [
  { src: '/gallery1.jpg', alt: 'Image 1', title: 'Stunning Landscape' },
  { src: '/gallery2.jpg', alt: 'Image 2', title: 'Vibrant Cityscape' },
  { src: '/gallery3.jpg', alt: 'Image 3', title: 'Serene Nature' },
  { src: '/gallery4.jpg', alt: 'Image 4', title: 'Architectural Wonder' },
  { src: '/gallery5.jpg', alt: 'Image 5', title: 'Stunning Landscape' },
  { src: '/gallery6.jpg', alt: 'Image 6', title: 'Vibrant Cityscape' },
  { src: '/gallery7.jpg', alt: 'Image 7', title: 'Serene Nature' },
  { src: '/gallery8.jpg', alt: 'Image 8', title: 'Architectural Wonder' },
  { src: '/gallery9.jpg', alt: 'Image 10', title: 'Serene Nature' },
  { src: '/gallery10.jpg', alt: 'Image 12', title: 'Architectural Wonder' },
];

function Modal({ image, onClose }: ModalProps) {
  if (!image) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative w-11/12 h-5/6">
        <Image
          src={image.src}
          alt={image.alt}
          title={image.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <p
        id="gallery"
        className="m-8 font-bold text-4xl underline decoration-4 decoration-dotted decoration-sky-500"
      >
        Galeria
      </p>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
        }}
        className="w-11/12"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      className="rounded-lg"
                      src={image.src}
                      alt={image.alt}
                      title={image.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleImageClick(image)}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Modal image={selectedImage} onClose={handleCloseModal} />
    </>
  );
}
