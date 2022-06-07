/* This example requires Tailwind CSS v2.0+ */
import Sec1 from '../assets/sec2-1.jpg'
import Sec2 from '../assets/sec2-2.jpg'
import Sec3 from '../assets/sec3-3.jpg'
import Sec4 from '../assets/sec2-4.jpg'
import Sec5 from '../assets/sec2-5.jpg'
import Sec6 from '../assets/sec2-6.jpg'
import Pho from '../assets/house-1.jpg'


export default function Example() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-3xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            About Our Services
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            บริการ ขาย เช่า!! บ้าน ที่ดิน คอนโด ในหัวหิน ชะอำ สนใจเข้าชมหรือข้อมูลเพิ่มเติม ติดต่อ
                            +66 (0)63-869 7817 <br/>
                            We inspire and helps our customers on finding their Dream place. Our services includes Sell &
                            Rent for Houses, Land and Condominium, Hua Hin and Cha-Am areas.
                            <br />More Information.
                             +66 (0)63-869 7817 THAI/ENGLISH
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div
                                    className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div
                                                className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src={Sec1}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Sec2}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Sec3}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Sec4}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Sec5}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Sec6}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={Pho}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block text-center bg-yellow-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
