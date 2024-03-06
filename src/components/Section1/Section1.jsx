const Section1 = () => {
    return <>
        <section className="section1">
            <div className="container w-50 d-flex align-items-center flex-column">
                <span className="section1_toit"><img className="w-100" src="/images/section1/TOIT.png" /></span>
                <span className="position-relative d-flex ">
                    <img className="w-100" src="/images/section1/BEER.png" />
                    <img className="section1_beer position-absolute" src="/images/section1/Mask Group.png" />
                </span>
                <span className="d-flex"><img className="mt-3 w-50" src="/images/section1/Arrow 5.png" /></span>
                <span className="d-flex mb-4">SCROLL DOWN</span>
            </div>
        </section>
    </>
}

export default Section1