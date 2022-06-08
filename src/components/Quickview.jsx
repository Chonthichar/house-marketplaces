import {useState} from 'react'
import {StarIcon} from '@heroicons/react/solid'
import {RadioGroup} from '@headlessui/react'

import {FaLine} from 'react-icons/fa'
import {FaMailchimp} from "react-icons/fa";
import {Link} from "react-router-dom";

const product = {
    // name: 'Pool Villa For Sale',
    price: 'For sale 4,300,000 Bath',
    // href: '#',
    breadcrumbs: [
        {id: 1, name: '🔥Villa For Sale 4.3 MB. (Fully Furnished)🔥'},
        // { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286693093_5471979392866240_6815337096908013286_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=BmHdHRJktoAAX_IN6uE&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-HJHHPZ4LTrZoKovYPnuP_X2NkGmWPSGc9S5IPGtDurQ&oe=62A3F993',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286373807_5471979436199569_5530932443641555806_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=1DgVypCJ43kAX8VF2PO&tn=IcFkUDcwWIuuHVHs&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT9ECM4QFV_J-0_u-5PalOv6g7-74eVJ1zs4pmhWebivGw&oe=62A331E0',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286405914_5471979232866256_4306273764346318565_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Uc4oJ2N8jiAAX_kVDpj&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_XGQn8SuMdvii0kXD8Cup698ah3mI0OOHXGZYmzAi7Rw&oe=62A3A52D',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286416411_5471979276199585_6908560478628948125_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=ooKChYfOE8AAX-8-j8H&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-AGkPI5J6MU3FdTjwYMw8dYPCbddvgSU1Tf-DKPQv0jA&oe=62A4F0C9',
            alt: 'Model wearing plain black basic tee.',
        },
    ],
    colors: [
        // { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        // { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        // { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        // { name: ' 3  bedrooms / 3 bathrooms', inStock: false },
        // { name: 'XS', inStock: true },
        // { name: 'S', inStock: true },
        // { name: 'M', inStock: true },
        // { name: 'L', inStock: true },
        // { name: 'XL', inStock: true },
        // { name: '2XL', inStock: true },
        // { name: '3XL', inStock: true },
    ],
    description:
        'ขายวิลล่า 4.3 ลบ.(รวมเฟอร์นิเจอร์พร้อมเข้าอยู่) อยู่ในพื้นที่หัวหินซอย 70 ' +
        ' ฟรีค่าใช้จ่ายวันโอนกรรมสิทธิ์ ' +
        ' 3 ห้องนอน / 3 ห้องน้ำ ' +
        ' ขนาดแปลง 89 ตร.วา ' +
        ' พื้นที่ใช้สอย 248 ตรม. ' +
        ' พร้อมสระว่ายน้ำขนาด 3 x 8 ม. ' +
        ' ที่จอดรถ 2 คัน ' +
        ' ฟรีแอร์ทุกห้อง ' +
        ' ฟรีเฟอร์นิเจอร์ทุกห้อง ' +
        ' ฟรีเคาน์เตอร์ครัว ' +
        ' ฟรีปั๊มน้ำ แท็งค์น้ำ ก๊อกผสมน้ำร้อน-เย็น ' +
        ' พร้อมวิวภูเขารอบโครงการ 🌿 ' +
        ' เดินทางไปชายหาดและตลาดหัวหิน เพียง 15 นาที',
    highlights: [
        '3  bedrooms / 3 bathrooms',
        '2 parking spaces (covered)',
        'Swimming pool 3x8  meters',
        'Built-in kitchen',
        'Usable area 248 SQM',
        'The villa is located at Huahin soi 70, only 15 minutes to beach and downtown',
        'Beautiful location surrounded by mountain views',
        'Beautiful location surrounded by mountain views',
        'Convenient  location,7 Eleven, Family Mart, Lotus, CJ and many popular coffee shops, Delis and bakery.'

    ],
    details: ''
    // 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = {href: '#', average: 4, totalCount: 117}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (

        <div className="bg-white">
            <div className='text-center text-3xl font-bold'>
                <p className='text-xl text-yellow-600'> Our Listing on Sale</p>
                <h1>Current listing on the Market</h1>
                <div></div>
            </div>
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 text-center mr-auto">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    {/*<svg*/}
                                    {/*    width={16}*/}
                                    {/*    height={20}*/}
                                    {/*    viewBox="0 0 16 20"*/}
                                    {/*    fill="currentColor"*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    aria-hidden="true"*/}
                                    {/*    className="w-4 h-5 text-gray-300"*/}
                                    {/*>*/}
                                    {/*    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>*/}
                                    {/*</svg>*/}
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page"
                               className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={product.images[3].src}
                            alt={product.images[3].alt}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div
                    className="max-w-2xl mx-auto pt-10 pb-2 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        {/*<div className="mt-6">*/}
                        {/*    <h3 className="sr-only">Reviews</h3>*/}
                        {/*    <div className="flex items-center">*/}
                        {/*        <div className="flex items-center">*/}
                        {/*            {[0, 1, 2, 3, 4].map((rating) => (*/}
                        {/*                <StarIcon*/}
                        {/*                    key={rating}*/}
                        {/*                    className={classNames(*/}
                        {/*                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',*/}
                        {/*                        'h-5 w-5 flex-shrink-0'*/}
                        {/*                    )}*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                />*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*        <p className="sr-only">{reviews.average} out of 5 stars</p>*/}
                        {/*        <a href={reviews.href}*/}
                        {/*           className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">*/}
                        {/*            {reviews.totalCount} reviews*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <form className="mt-10">
                            {/* Colors */}
                            {/*<div>*/}
                            {/*    <h3 className="text-sm text-gray-900 font-medium">Color</h3>*/}

                            {/*    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">*/}
                            {/*        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>*/}
                            {/*        <div className="flex items-center space-x-3">*/}
                            {/*            {product.colors.map((color) => (*/}
                            {/*                <RadioGroup.Option*/}
                            {/*                    key={color.name}*/}
                            {/*                    value={color}*/}
                            {/*                    className={({active, checked}) =>*/}
                            {/*                        classNames(*/}
                            {/*                            color.selectedClass,*/}
                            {/*                            active && checked ? 'ring ring-offset-1' : '',*/}
                            {/*                            !active && checked ? 'ring-2' : '',*/}
                            {/*                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'*/}
                            {/*                        )*/}
                            {/*                    }*/}
                            {/*                >*/}
                            {/*                    <RadioGroup.Label as="span" className="sr-only">*/}
                            {/*                        {color.name}*/}
                            {/*                    </RadioGroup.Label>*/}
                            {/*                    <span*/}
                            {/*                        aria-hidden="true"*/}
                            {/*                        className={classNames(*/}
                            {/*                            color.class,*/}
                            {/*                            'h-8 w-8 border border-black border-opacity-10 rounded-full'*/}
                            {/*                        )}*/}
                            {/*                    />*/}
                            {/*                </RadioGroup.Option>*/}
                            {/*            ))}*/}
                            {/*        </div>*/}
                            {/*    </RadioGroup>*/}
                            {/*</div>*/}

                            {/* Sizes */}
                            <div className="mt-10">
                                {/*<div className="flex items-center justify-between">*/}
                                {/*    <h3 className="text-sm text-gray-900 font-medium">Size</h3>*/}
                                {/*    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">*/}
                                {/*        Size guide*/}
                                {/*    </a>*/}
                                {/*</div>*/}

                                {/*  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">*/}
                                {/*      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>*/}
                                {/*      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">*/}
                                {/*          {product.sizes.map((size) => (*/}
                                {/*              <RadioGroup.Option*/}
                                {/*                  key={size.name}*/}
                                {/*                  value={size}*/}
                                {/*                  disabled={!size.inStock}*/}
                                {/*                  className={({active}) =>*/}
                                {/*                      classNames(*/}
                                {/*                          size.inStock*/}
                                {/*                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'*/}
                                {/*                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',*/}
                                {/*                          active ? 'ring-2 ring-indigo-500' : '',*/}
                                {/*                          'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'*/}
                                {/*                      )*/}
                                {/*                  }*/}
                                {/*              >*/}
                                {/*                  {({active, checked}) => (*/}
                                {/*                      <>*/}
                                {/*                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>*/}
                                {/*                          {size.inStock ? (*/}
                                {/*                              <span*/}
                                {/*                                  className={classNames(*/}
                                {/*                                      active ? 'border' : 'border-2',*/}
                                {/*                                      checked ? 'border-indigo-500' : 'border-transparent',*/}
                                {/*                                      'absolute -inset-px rounded-md pointer-events-none'*/}
                                {/*                                  )}*/}
                                {/*                                  aria-hidden="true"*/}
                                {/*                              />*/}
                                {/*                          ) : (*/}
                                {/*                              <span*/}
                                {/*                                  aria-hidden="true"*/}
                                {/*                                  className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"*/}
                                {/*                              >*/}
                                {/*  <svg*/}
                                {/*      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"*/}
                                {/*      viewBox="0 0 100 100"*/}
                                {/*      preserveAspectRatio="none"*/}
                                {/*      stroke="currentColor"*/}
                                {/*  >*/}
                                {/*    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke"/>*/}
                                {/*  </svg>*/}
                                {/*</span>*/}
                                {/*                          )}*/}
                                {/*                      </>*/}
                                {/*                  )}*/}
                                {/*              </RadioGroup.Option>*/}
                                {/*          ))}*/}
                                {/*      </div>*/}
                                {/*  </RadioGroup>*/}
                                <p>
                                    📞 Tel: 063 869 7817 <br/>
                                    📱 Line: 063 869 7817 <br/>
                                    📧 Email: propertyhuahin711@gmail.com
                                </p>
                            </div>

                            <Link to='/contact'>
                                <button
                                    type="submit"
                                    className="mt-10 w-full bg-indigo-600 border
                                border-transparent rounded-md py-3 px-8 flex items-center
                                justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Contact
                                </button>
                            </Link>
                        </form>
                    </div>

                    <div
                        className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/*<div className="mt-10">*/}
                        {/*<h2 className="text-sm font-medium text-gray-900">Details</h2>*/}

                        {/*<div className="mt-4 space-y-6">*/}
                        {/*    <p className="text-sm text-gray-600">{product.details}</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
