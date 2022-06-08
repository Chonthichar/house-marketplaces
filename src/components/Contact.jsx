function Contact() {
    return (
        <div className='' id='main-contact'>

            <p className="h4 mb-4 bg-yellow-600 text-white p-2 w-1/1 mr-auto ml-auto text-center mt-2">Contact us</p>

            <form className="text-center border border-light p-5"
                  action="https://formsubmit.co/chonthichar.soythong@gmail.com" method='POST'>


                <input type="text" name='name' id="defaultContactFormName" className="form-control mb-4"
                       placeholder="Name"/>

                    <input type="hidden" name="_next" value="https://www.huahindreamhome.com/thank" />

                <input type="email" name='email' id="defaultContactFormEmail" className="form-control mb-4"
                       placeholder="E-mail"/>

                <input type="hidden" name="_subject" value="New submission on website House Market For Sale!"
                       placeholder='subject'/>

                <input type="hidden" name="_captcha" value="false"/>


                 <input type="hidden" name="_autoresponse"
                                   value="Thanks for your submission. We will get back to you shortly. /ขอบคุณสำหรับข้อความ เราจะติดต่อกลับหาท่านในไม่ช้า
                                    📠 Tel 063 869 7817
                                    📱 063 869 7817
                                    💻 Email propertyhuahin711@gmil.com"/>

                 <input type="hidden" name="_template" value="table"/>

                <div className="form-group">
                            <textarea className="form-control rounded-0" name="message"  id="exampleFormControlTextarea2" rows="3"
                                      placeholder="Message"></textarea>
                </div>

                {/*<div className="custom-control custom-checkbox mb-4">*/}
                {/*    <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>*/}
                {/*    <label className="custom-control-label" form="defaultContactFormCopy">Send me a copy of this*/}
                {/*        message</label>*/}
                {/*</div>*/}


                <button className="btn btn-info btn-block bg-yellow-600 hover:bg-yellow-500 mt-4 text-white" type="submit">Send Message
                </button>

            </form>
        </div>
    )
}

export default Contact