function Contact() {
    return (
        <div className='container'>
        <form className="text-center border border-light p-5" action="#!">

            <p className="h4 mb-4">Contact us</p>


            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name"/>


            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail"/>


            <label>Subject</label>
            <select className="browser-default custom-select mb-4">
                <option value="" disabled>Choose option</option>
                <option value="1" selected>Feedback</option>
                <option value="2">Report a bug</option>
                <option value="3">Feature request</option>
                <option value="4">Feature request</option>
            </select>


            <div className="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"
                                      placeholder="Message"></textarea>
            </div>

            <div className="custom-control custom-checkbox mb-4">
                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>
                <label className="custom-control-label" form="defaultContactFormCopy">Send me a copy of this
                    message</label>
            </div>


            <button className="btn btn-info btn-block" type="submit">Send</button>

        </form>
        </div>
    )
}

export default Contact