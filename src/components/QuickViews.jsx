import {useState} from 'react'
import {StarIcon} from '@heroicons/react/solid'
import {RadioGroup} from '@headlessui/react'

import {FaLine} from 'react-icons/fa'
import {FaMailchimp} from "react-icons/fa";
import {Link} from "react-router-dom";

const product = {
    // name: 'Pool Villa For Sale',
    price: 'For sale 5,200,000 Baht',
    // href: '#',
    breadcrumbs: [
        {id: 1, name: '🔥Luxury villa Scandinavian Style (Eden) 5.2 MB🔥'},
        // { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286764579_5472078389523007_6587362629884334072_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=cXnE6t_8Ry8AX9jt3cn&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-atP77F8Sh8h6m2S8lxSXLHiio5mEOZGAY6Ax-OsvLgQ&oe=62A4920B',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286485060_5472078392856340_8318341583035450151_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=9bQxW6HQ72gAX8PBJ5g&tn=IcFkUDcwWIuuHVHs&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-M6zStf3BFUnVSB3kNc4u9kt71n7yoMHwSwOR1izg90w&oe=62A45B08',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286530688_5472078396189673_69981307412696494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ghSuPSRmL9kAX888xkp&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT86Knq5pfx8kIonksI2B1m0Jvgmk9TeguUBHStUh4hP9g&oe=62A49224',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286748870_5472078366189676_6779685388647048214_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=DGnAItRzCsMAX9c8W4R&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_8PFtcn3iN4r2aOE95LylRbnbPSq3fDz2cSmakw0bdaA&oe=62A3CD15',
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
        'ขายวิลล่าพร้อมเข้าอยู่ ราคา 5.2ลบ 🌿 ' +
        'สร้างเสร็จพร้อมเข้าอยู่' +
        'อยู่ในพื้นที่หัวหิน - ชะอำ ( ห่างจากทะเล 1.5 กม.)' +
        ' ขนาดที่ดิน 75.5 ตารางวา' +
        ' พื้นที่ใช้สอย 137 ตารางเมตร' +
        ' 3 ห้องนอน 2 ห้องน้ำ' +
        ' สระว่ายน้ำ 3×7 ม.' +
        ' จอดรถได้ 2 คัน' +
        ' ฟรีผ้าม่าน' +
        ' ฟรีแอร์' +
        ' ฟรีเฟอร์นิเจอร์' +
        ' ฟรีครัวยุโรป + เครื่องใช้ไฟฟ้า' +
        ' บริเวณส่วนกลาง' +
        'มีสระว่ายน้ำส่วนกลางขนาดใหญ่' +
        ' พื้นที่สวนสวย ฟิตเนส ซาวน่า' +
        ' มีรปภ. ระบบรักษาความปลอดภัย 24 ชม.' +
        'โครงการห่างจากถนนเพชรเกษม 1 กม.' +
        'ห่างจากทะเล 1.5 กม.' +
        'ใกล้สนามกอล์ฟปาล์มฮิลล์ 800 เมตร' +
        'ใกล้สนามบินหัวหิน 2 กม.',
    highlights: [
        'Usable space 137 SQM',
        'Land Plot 75.5 SQW. (302 SQM.)',
        '3 bedrooms  2 bathrooms ',
        'Swimming pool 3×7 M. (privacy design)',
        'Carport 2 cars',
        'Communal Pool / Fitness / Sauna',
        'Only 1.5 Km. to Beach',
        'Only 1 Km. to Petkasem Main Rd.n',
        'only 2 Km. to HuaHin Airport',
        'Communal Area ',
        'Swimming',
        'Fitness',
        'Sauna',
        '24 hrs. Security guard',
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
            <div className="pt-0 mb-0 pb-0 b-0  ">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 mb-0 pb-0">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center  ">
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
                    className="max-w-2xl mx-auto pt-10 pb-3 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
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

                        <div className="mt-4 mb-0">
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
