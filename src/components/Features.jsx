/* This example requires Tailwind CSS v2.0+ */
import {AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon} from '@heroicons/react/outline'

const features = [
    {
        name: 'Sell & Rent',
        description:
            'Our services includes Sell and Rent for Houses, Land and Condominium.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Property transferring and legal process',
        description:
            'We can help you through the transfer of property process that takes place after an agreement of selling or buying. ' +
            'With us you are ensured to get the best deal available base on your dream home.',
        icon: ScaleIcon,
    },
    {
        name: 'Location',
        description:
            'Services are provided in the most desirable areas locations in Hua Hin and Cha-Am, Thailand.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Experiences',
        description:
            'We are team of highly experienced residential experts can guide you ' +
            'through the buying and renting process, where multiple tasks that need to be completed before moving to the next one. ' +
            'Make sure that your process are going smoothly by choosing our services.',
        icon: AnnotationIcon,
    },
]

export default function Example() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        We provide the best services for you.
                    </p>
                    <p className="mt-4 max-w-2xl text-2xs text-gray-500 lg:mx-auto ">
                        บริการ ขาย เช่า!! บ้าน ที่ดิน คอนโด ในหัวหิน ชะอำ <br/> สนใจเข้าชมหรือข้อมูลเพิ่มเติม <br/> ติดต่อ
                        +66 (0)63-869 7817 <br/>
                        We inspire and helps our customers on finding their Dream place.
                        <br/>More Information.
                        +66 (0)63-869 7817 THAI/ENGLISH
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true"/>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
