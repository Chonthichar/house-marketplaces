import Sec1 from '../assets/sec2-1.jpg'
import Sec2 from '../assets/sec2-2.jpg'
import Sec3 from '../assets/sec3-3.jpg'
import Sec4 from '../assets/sec2-4.jpg'
import Sec5 from '../assets/sec2-5.jpg'
import Sec6 from '../assets/sec2-6.jpg'
import Pho from '../assets/house-1.jpg'

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/275300824_742542387132333_1695952748735029645_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=b31c73UUvAEAX-lyjLT&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT9lzutgV0FHUHp-PHGxLa7LezHNlfmj4alqzJkPbkDS8A&oe=629E9469',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
    {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240590462_645127790207127_7317340299029356567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xWipD_5H17EAX-KW9j7&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT--az99jhTjyHPsj1R3Bzq36WU9w_0TDX9-hBhKPrqM3A&oe=629F3972',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
       {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240370823_610021233717783_521855481721371946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcZsoTFqi6sAX-dKEHj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-6i3eI6WMT4RkcNsXzqsKtn03k47ORd9LljW3HYSj1Iw&oe=629E3C94',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Currently Property on the market</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
