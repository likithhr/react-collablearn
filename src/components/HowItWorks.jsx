import React from 'react'
import { Play, Users, Shield } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    { icon: <Play className="h-12 w-12 text-white" />, title: "Browse Courses", desc: "Find courses that interest you." },
    { icon: <Users className="h-12 w-12 text-white" />, title: "Join Community", desc: "Connect with learners and experts." },
    { icon: <Shield className="h-12 w-12 text-white" />, title: "Start Learning", desc: "Access and complete courses." }
  ]

  return (
    <section className="py-12 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-blue-500 p-6 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
