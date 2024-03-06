const Section3 = () => {
    return <>
        <section className="section3 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                <div className="col-md-6"></div>
                <div className="col-md-6 p-5 position-relative">
                    <img className="section3_image" src="/images/section3/Toit-Pune-brewpub-10 2.png" />
                    <img className="section3_overlay position-absolute" src="/images/section3/Rectangle 135.png" />
                </div>
            </div>
            <div className="row position-absolute container w-75">
                <p className="font-weight-bold">ABOUT US</p>
                <p className="section3_heading">WE ARE TOIT. <br />YOU SHOULD BE TOO.</p>
                <p className="section3_paragraph w-50">Toit is a brew pub, brewing a revolutionary culture. We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience</p>
            </div>
        </section>
    </>
}

export default Section3