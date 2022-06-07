import {useState} from 'react'
import {StarIcon} from '@heroicons/react/solid'
import {RadioGroup} from '@headlessui/react'

import {FaLine} from 'react-icons/fa'
import {FaMailchimp} from "react-icons/fa";
import {Link} from "react-router-dom";

const product = {
    // name: 'Pool Villa For Sale',
    price: 'For sale 14,800,000 Bath',
    // href: '#',
    breadcrumbs: [
        {id: 1, name: '🔥Brand new Luxury Villa For Sale 14.8 MB🔥'},
        // { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286303155_5472164562847723_9044527869668589088_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZokNp9irSiwAX9B59Eu&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT98pBZSx4kIkngSsb-g29Y1k1C3BbzLWfnadQehD8Hk6w&oe=62A4CA5E',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286797923_5472164572847722_7379531278934481511_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=EinRHOsFSbsAX-5DIjP&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_fJG3DwMUAD3VDfxauyVsA5WKmsDYNjnnUAcfYFJJ9Zw&oe=62A3EA17',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286424997_5472164599514386_7710227238168196165_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=qSPdCOEqp1wAX8Q9i9d&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT8OWLU62jpBeWHnolFjllEtd0pqT23_O25QduINNznTQA&oe=62A4C3FE',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286560837_5472164586181054_3699984068949078023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=1fw7FLBxzFUAX_-n-up&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT94vSPP4YautBtAzOgaEoicONn6KzX__sn-zWuUpzLAaw&oe=62A4BBE6',
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

        '🌟พื้นที่ใช้สอย 462 ตร.ม.' +
        '🌟ตกแต่งเฟอร์นิเจอร์บิวอินเกรดพรีเมี่ยม' +
        '🌟บ้านระบบ smart Lock' +
        '🌟ติดตั้งผ้าม่านระบบไฟฟ้า ใช้รีโมทคอนโทรล' +
        '🌟3 ห้องนอน 4 ห้องน้ำ' +
        '🌟พร้อมสระว่ายน้ำส่วนตัวขนาด 5x12 ม.' +
        '🌟เทอเรสขนาดกว้าง ไม่มีเสาบังวิวทิวทัศน์' +
        '🌟ประตูเข้า ออก ระบบดิจิทัล ล็อค' +
        '🌟เสาไฟฟ้าลงใต้ดิน' +
        '🌟ติดตั้งระบบกรองน้ำใช้ทุกก๊อกในบ้าน' +
        '🌟หิ้วกระเป๋าเข้าอยู่ได้เลย' +
        '🌟ค่าส่วนกลางตร.วา ละ 8 บาท / เดือน' +
        '🌟และระบบรักษาความปลอดภัย 24 ชม.' +
        '🌟ท่ามกลางวิวบรรยากาศติดสนามกอล์ฟ วิวภูเขา' +
        '🌟เพียง 5 นาที ไปชายหาดหัวหิน' +
        '🌟ใกล้สนามบินหัวหิน' +
        '🚘การเดินทาง' +
        'ถนนเพชรเกษมขาเข้าหัวหิน เลี้ยวเข้าสนามกอล์ฟ PalmHills' +
        'อยู่ในสนามกอล์ฟปาล์มฮิลล์ หัวหิน' +
        'ใกล้สนามบินหัวหิน' +
        '️ใกล้โรงพยาบาลหัวหิน' +
        '️ใกล้แมคโครซุปเปอร์สโตร์' +
        '️ใกล้แหล่งท่องเที่ยวยอดนิยมในหัวหิน-ชะอำ'
    ,
    highlights: [
        'Brand new Luxury Villa For Sale Hua Hin - Cha am⚡️Selling Price Start 14.8 - 15.4 MB.⛱️🔥 The Villa is situated in PalmHIills Golf Club & Residence👈 Prime Location / only 5 minutes to beach and Airport ',
        'Land size 147 - 182 sq.wa. (588- 728sq.m)',
        'Usable area  462 sq.m.',
        ' comes with luxury built-in furniture',
        ' European kitchen with Electrical appliances',
        ' 3  bedrooms 4 bathrooms',
        'Spacious terrace',
        'Installing Door with Digital Lock system',
        ' Swimming Pool Size 5x12 m.',
        'Automatic Curtains with remote control',
        ' underground Electricity ',
        ' Installing Filter water supply for all faucet tap',
        'common fee only 8 THB./Month',
        ' Security Guard for 24 hours.',
        ' Surrounded by mountain views and golf course',
        'Only 5 minutes to Hua Hin Beach ',
        'convenient for coffee shop , restuarant , supermarket.',
        '🚘 Location🚘 Petchkasem Road, Hua Hin enters PalmHills Gate Hua Hin Airport  only 5 minutes Hua Hin Hospital only 10 minutes' +
        'Makro supermarket only 10 minutes Hua Hin down town only 15 minutes',
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
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
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
                    className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
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
                                    📠 Tel 063 869 7817 <br/>
                                    📱 063 869 7817 <br/>
                                    💻 Email propertyhuahin711@gmil.com
                                </p>
                            </div>
                            <Link to='/contact'>
                            <button
                                type="submit"
                                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
