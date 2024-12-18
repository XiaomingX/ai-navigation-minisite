'use client'

import { Star } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface Testimonial {
  id: number
  name: string
  image: string
  rating: number
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Scott Gardner",
    image: "/placeholder.svg",
    rating: 5,
    content: "易用性、实用性和灵活性都是A++。我尝试过几款最高评价的LLM AI扩展，Sider绝对是我目前最喜欢的。我喜欢可以通过OpenAI API访问更多的ChatGPT模型，包括我创建和调优的自定义模型。因为我仍然需要ChatGPT的灵活性以及它的自定义GPT，我不会取消ChatGPT的订阅去选择Sider每月20美元的Pro订阅。"
  },
  {
    id: 2,
    name: "Scott Gardner",
    image: "/placeholder.svg",
    rating: 5,
    content: "易用性、实用性和灵活性都是A++。我尝试过几款最高评价的LLM AI扩展，Sider绝对是我目前最喜欢的。我喜欢可以通过OpenAI API访问更多的ChatGPT模型，包括我创建和调优的自定义模型。因为我仍然需要ChatGPT的灵活性以及它的自定义GPT，我不会取消ChatGPT的订阅去选择Sider每月20美元的Pro订阅。"
  },
  {
    id: 3,
    name: "Scott Vsilm",
    image: "/placeholder.svg",
    rating: 4,
    content: "易用性、实用性和灵活性都是A++。我尝试过几款最高评价的LLM AI扩展，Sider绝对是我目前最喜欢的。我喜欢可以通过OpenAI API访问更多的ChatGPT模型，包括我创建和调优的自定义模型。因为我仍然需要ChatGPT的灵活性以及它的自定义GPT，我不会取消ChatGPT的订阅去选择Sider每月20美元的Pro订阅。"
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">我们的用户怎么说</h2>
        
        <div className="mb-6">
          <p className="text-muted-foreground">
            我们为所有 ChatGPT 用户（包括 Plus 用户和免费用户）提供卓越服务。
          </p>
        </div>

        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevious}
                    aria-label="Previous testimonial"
                  >
                    <span className="sr-only">Previous testimonial</span>
                    ←
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                  >
                    <span className="sr-only">Next testimonial</span>
                    →
                  </Button>
                </div>
              </div>

              <blockquote className="text-lg leading-relaxed">
                {testimonials[currentIndex].content}
              </blockquote>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

