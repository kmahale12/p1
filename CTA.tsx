'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free 14-day trial',
  'No credit card required',
  'Cancel anytime',
  '24/7 expert support',
];

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),transparent)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-8 text-blue-200">
          Ready to get started?
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Transform your workflow today
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          Join thousands of teams who have already revolutionized their productivity. 
          Start your free trial today and experience the difference.
        </p>
      </div>
      
      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-12">
        <div className="flex flex-col gap-4 lg:flex-1 lg:max-w-md">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-blue-100">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-1 lg:justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-3 h-auto"
          >
            Start free trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-300 text-blue-100 hover:bg-blue-800/50 transition-all duration-300 text-lg px-8 py-3 h-auto"
          >
            Schedule demo
          </Button>
        </div>
      </div>
      
      <div className="mx-auto mt-16 text-center">
        <p className="text-sm text-blue-200">
          Trusted by leading companies worldwide
        </p>
        <div className="mt-8 flex items-center justify-center gap-8 opacity-60">
          <div className="text-white font-bold text-xl">COMPANY</div>
          <div className="text-white font-bold text-xl">BRAND</div>
          <div className="text-white font-bold text-xl">CORP</div>
          <div className="text-white font-bold text-xl">TECH</div>
        </div>
      </div>
    </section>
  );
}