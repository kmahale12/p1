'use client';
import { BanknotesIcon, ChartBarIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-blue-600" />,
    title: "Mobile Banking",
    description: "Access your accounts anytime, anywhere with our secure mobile app."
  },
  {
    icon: <BanknotesIcon className="h-8 w-8 text-blue-600" />,
    title: "Digital Payments",
    description: "Send and receive money instantly with just a few taps."
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
    title: "Investment Tools",
    description: "Grow your wealth with our smart investment recommendations."
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
    title: "Advanced Security",
    description: "Your money is protected with bank-grade security measures."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}