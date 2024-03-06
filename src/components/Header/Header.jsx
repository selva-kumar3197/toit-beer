const Header = () => {
    return <div className="py-4 d-flex row container-fluid bg-transparent position-absolute font-weight-bold">
        <div className="d-flex col-sm-4 justify-content-center mb-2">
            <span><img className="w-50" src="/images/section1/Frame 1.png" /></span>
            <span className="d-flex font-weight-bold justify-content-center">MENU</span>
        </div>
        <div className="d-flex col-sm-4 justify-content-center"><img className="header_logo" src="/images/section1/toit-logo 1.png" /></div>
        <div className="d-flex col-sm-4 justify-content-center align-items-start">
            <span className="text-capitalize m-1 font-weight-bold">BREWERY TOUR</span>
            <button className="text-capitalize mx-1 font-weight-bold text-black bg-transparent text-white border border-white px-3 py-1">FIND MY BEER</button>
        </div>
    </div>
}

export default Header