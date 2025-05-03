"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Play, Pause, RefreshCw } from "lucide-react"

interface DemoStep {
  title: string
  description: string
  image: string
  caption?: string
}

interface InteractiveDemoProps {
  title: string
  description?: string
  steps: DemoStep[]
  className?: string
  autoPlayInterval?: number
}

export function InteractiveDemo({
  title,
  description,
  steps,
  className,
  autoPlayInterval = 5000,
}: InteractiveDemoProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("demo")

  // Auto-play functionality
  useState(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, autoPlayInterval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  })

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <div className={cn("rounded-[1rem] overflow-hidden border border-gray-200 dark:border-gray-800", className)}>
      <Tabs defaultValue="demo" className="w-full" onValueChange={setActiveTab}>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <TabsList>
            <TabsTrigger value="demo">Demo</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="demo" className="m-0">
          <div className="relative">
            {/* Step image */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-900">
            <iframe
  src={steps[currentStep].image} // Use the URL of your app/page here
  title={steps[currentStep].title}
  className="w-full h-full"
  loading="lazy"
  allowFullScreen
></iframe>

            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full bg-primary dark:bg-teal-400 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">{steps[currentStep].title}</h4>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? "Pause demo" : "Play demo"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={resetDemo} aria-label="Reset demo">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{steps[currentStep].description}</p>

            {/* Step navigation */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep ? "bg-primary dark:bg-teal-400 scale-125" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    onClick={() => setCurrentStep(index)}
                    aria-label={`Go to step ${index + 1}`}
                  ></button>
                ))}
              </div>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="info" className="m-0 p-6">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          {description && <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary dark:bg-teal-400 text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
