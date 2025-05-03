"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className={cn("relative", className)}>
      {/* Main gallery view */}
      <div className="relative overflow-hidden rounded-[0.5rem] border border-gray-200 dark:border-gray-800">
        <div className="aspect-video relative">
          <img
            src={images[currentIndex].src.replace("/public", "") || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          {/* Caption */}
          {images[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
              {images[currentIndex].caption}
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Fullscreen button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800"
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-primary dark:border-teal-400 opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-transparent border-gray-500 text-white hover:bg-gray-800"
            onClick={toggleFullscreen}
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="relative w-screen max-w-5xl">
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                {images[currentIndex].caption}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent border-gray-500 text-white hover:bg-gray-800"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent border-gray-500 text-white hover:bg-gray-800"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  )
}
