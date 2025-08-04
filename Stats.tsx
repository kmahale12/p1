'use client';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Users',
    value: '10M+',
    change: '+12%',
    changeType: 'increase',
    icon: Users,
    description: 'Users trust our platform',
  },
  {
    id: 2,
    name: 'Tasks Automated',
    value: '50B+',
    change: '+25%',
    changeType: 'increase',
    icon: Zap,
    description: 'Tasks automated monthly',
  },
  {
    id: 3,
    name: 'Revenue Growth',
    value: '300%',
    change: '+18%',
    changeType: 'increase',
    icon: TrendingUp,
    description: 'Average customer growth',
  },
  {
    id: 4,
    name: 'Awards Won',
    value: '25+',
    change: '+5',
    changeType: 'increase',
    icon: Award,
    description: 'Industry awards received',
  },
];

export function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by industry leaders worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Our platform powers millions of workflows and drives unprecedented growth for businesses of all sizes.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-blue-200 group-hover:text-white transition-colors duration-300" />
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {stat.change}
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-4xl font-bold tracking-tight text-white group-hover:scale-110 transition-transform duration-300 origin-left">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-blue-100 group-hover:text-white transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-blue-200">
            Join thousands of companies already using our platform
          </p>
          <div className="mt-8 flex items-center justify-center space-x-12 opacity-60">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
              <div key={company} className="text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}