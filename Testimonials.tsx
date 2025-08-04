'use client';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content: "This platform has revolutionized how we work. The automation features alone have saved us 20+ hours per week. The interface is intuitive and the support team is incredibly responsive.",
    author: {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
  {
    id: 2,
    content: "The analytics dashboard gives us insights we never had before. We've increased our productivity by 300% since implementing this solution. It's a game-changer for our industry.",
    author: {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'DataCore Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
  {
    id: 3,
    content: "Security was our biggest concern, but this platform exceeded all our expectations. The enterprise-grade security features give us peace of mind while the collaboration tools keep our team connected.",
    author: {
      name: 'Emily Johnson',
      role: 'Operations Director',
      company: 'SecureBank Ltd.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by customers worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-900 mb-8">
                  <p className="text-lg leading-relaxed">"{testimonial.content}"</p>
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={`https://images.unsplash.com/photo-${1600000000000 + i * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt={`Customer ${i}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-blue-700">
              Join 10,000+ satisfied customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}