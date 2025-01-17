import {HomeIcon, CloudArrowUpIcon, BriefcaseIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Homeowners',
    description:
      'DecorAI can be a great solution for homeowners who want to redesign their spaces without the help of an expensive interior designer.',
    icon: HomeIcon,
  },
  {
    name: 'Renters',
    description:
      'Renters may not want to invest in permanent changes to their spaces, DecorAI could help them find temporary furniture and decor solutions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Small Businesses',
    description:
      'Small businesses may not have the budget to hire an interior designer but could benefit from DecorAI to design and furnish their spaces.',
    icon: BriefcaseIcon,
  },
  
];

export function SuitableFor() {
  return (
    <div className="py-24 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
      
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-6xl">
          Great Solution For
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400">
        DecorAI.xyz created this AI-driven interior design solution with the intention of assisting numerous homeowners and small businesses.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-300">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  );
}
