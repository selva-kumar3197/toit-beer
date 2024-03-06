const Footer = () => {

    return <footer>
        <div className="pt-4 p-0 m-0 d-flex row container-fluid footer">
            <div className="d-flex flex-column align-items-center">
                <img className="footer_arrow_1" src="/images/footer/Arrow 14.png" />
                <span className="my-2">TOP</span>
            </div>
            <div className="d-flex flex-column align-items-center text_footer_1 my-2">
                NEWSLETTER SIGN UP
            </div>
            <div className="d-flex justify-content-center text_footer_1 my-2">
                <input className="footer_newsletter_input" type="text"  placeholder="Email Address" />
                <span className="footer_newsletter_button d-flex justify-content-center align-items-center cursor_pointer">
                    <img src="/images/footer/fluent_send-28-filled.png" />
                </span>
            </div>

            <div className="row w-75 m-auto bg-transparent footer_container">
                <div className="col-md-6">
                    <div className="d-flex m-3">
                        <img className="cursor_pointer footer_arrow_2 me-4" src="/images/footer/Arrow 9.png" />
                        <span className="text_footer_2 cursor_pointer">ABOUT</span>
                    </div>
                    <div className="d-flex m-3">
                        <img className="cursor_pointer footer_arrow_2 me-4" src="/images/footer/Arrow 9.png" />
                        <span className="text_footer_2 cursor_pointer">BEER</span>
                    </div>
                    <div className="d-flex m-3">
                        <img className="cursor_pointer footer_arrow_2 me-4" src="/images/footer/Arrow 9.png" />
                        <span className="text_footer_2 cursor_pointer">FOOD</span>
                    </div>
                    <div className="d-flex m-3">
                        <img className="cursor_pointer footer_arrow_2 me-4" src="/images/footer/Arrow 9.png" />
                        <span className="text_footer_2 cursor_pointer">SHOP</span>
                    </div>
                    <div className="d-flex m-3">
                        <img className="cursor_pointer footer_arrow_2 me-4" src="/images/footer/Arrow 9.png" />
                        <span className="text_footer_2 cursor_pointer">CONTACT</span>
                    </div>
                    <div className="mx-3 py-5">
                        <div className="d-flex my-5">
                            <span className="text_footer_2">© Copyright 2022</span>
                        </div>
                    </div>
                </div>
                    
                <div className="col-md-6">
                    <div className="d-flex m-3 flex-column align-items-end">
                        <p className="text_footer_2 address">298, 110 ft Rd,</p>
                        <p className="text_footer_2 address">Indira Nagar II Stage,</p>
                        <p className="text_footer_2 address">Bengluru 560038,</p>
                        <p className="text_footer_2 address">Karnataka</p>
                    </div>
                    <div className="d-flex m-3 flex-column align-items-end">
                        <p className="text_footer_2 address">+91 99999 99999</p>
                        <p className="text_footer_2 address">toitblr@toit.in</p>
                    </div>
                    <div className="mx-3 py-5">
                        <div className="d-flex my-5 justify-content-end">
                            <span className="text_footer_2">All right reserved</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-0 m-0">
                <div className="footer_glass_container position-relative">
                <img className="m-0 p-0 footer_glass" src="/images/footer/Group 109 (1).png"  />
                </div>
            </div>
        </div>
    </footer>
}

export default Footer