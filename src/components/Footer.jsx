import Line from 'react-icons'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';
import Profile from "../assets/profile.jpg"
import Logo from "../assets/logo.jpg"
import {FaFacebook} from 'react-icons/fa';
import Profile2 from "../assets/profile-2.jpg"

function Footer() {
    return (
        <>
            <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
                <div
                    className="flex justify-center items-center lg:justify-between p-3 border-b border-gray-300 container">
                    {/*<div className="mr-12 hidden lg:block">*/}
                    {/*  <span>Get connected with us on social networks:</span>*/}
                    {/*</div>*/}

                </div>
                <div className="mx-13 py-1 text-center md:text-center mb-0 b-0 container pb-0">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">

                        <div className="">
                             <h6 className="uppercase font-bold mb-1 mt-2">
                                HuaHin DreamHome PoolVilla
                            </h6>
                            <p className='text-xs'> ขาย เช่า!! บ้าน ที่ดิน คอนโด ในหัวหิน ชะอำ
                                สนใจเข้าชมหรือข้อมูลเพิ่มเติม
                                <br/>ติดต่อ 063-869 7817 TH/EN</p>
                        </div>
                        <div className="">
                            <h6 className="uppercase font-bold mb-1 mt-2">
                               Services
                            </h6>
                            <p className='text-xs'>
                                Sell & Rent
                                <br/>
                                Land - House - Condo
                            </p>
                        </div>

                        <div className="grid-cols-7 text-center">
                            <h6 className="uppercase font-semibold mb-4  justify-center md:justify-start grid-cols-3">
                                Contact Our team for more info
                            </h6>
                            {/*<img*/}
                            {/*    className="h-20 w-auto rounded-full"*/}
                            {/*    src={Profile}*/}
                            {/*    alt=""*/}
                            {/*/>*/}


                            <p className="flex items-center justify-center md:justify-start mb-2 ml-2 text-xs">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                                     className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                    </path>
                                </svg>
                                Tel : 063 869 7817 (Th/Eng)
                            </p>
                            <p className="flex items-center justify-center md:justify-start ml-2 text-xs">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
                                     className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                                    </path>
                                </svg>
                                Line : 0638697817
                            </p>
                             <p className="flex items-center justify-center md:justify-start mb-2 ml-2 text-xs">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                     className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                    </path>
                                </svg>
                                propertyhuahin711@gmail.com
                            </p>

                                <p className="flex items-center justify-center md:justify-start mb-2 ml-2 text-xs">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                     className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                    </path>
                                </svg>
                                18 Moo1 Hua-Hin, Thailand 77110
                            </p>
                        </div>
                        <div className="">
                            <h6 className="uppercase font-semibold mb-2  text-center mr-auto ml-auto">
                                Contact
                            </h6>

                            <img
                                className=" w-auto border-2 mr-auto ml-auto "
                                src={Profile2}
                                alt=""
                            />
                            <p>
                                Nattakan Kumkuman (Nicky) <br/>
                                (Real Estate Consultant)
                            </p>
                        </div>
                    </div>


                </div>


                <MDBFooter className='bg-light text-center text-white'>
                    <div className='container p-0 pb-0'>
                        <section className='mb-1 '>
                            <a
                                className='btn btn-primary btn-floating m-1 text-2xl'
                                style={{backgroundColor: '#3b5998'}}
                                href='https://www.facebook.com/dreamhomevilla'
                                role='button'
                            >
                                <FaFacebook/>
                            </a>

                        </section>
                    </div>

                    <div className='text-center p-2 text-xs' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2020 Copyright :
                        <a className='text-white text-xs' href='https://www.facebook.com/dreamhomevilla'>
                            : HuaHin DreamHome PoolVilla <br/>
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        </>
    )
}

export default Footer