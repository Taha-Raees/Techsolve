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

            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
