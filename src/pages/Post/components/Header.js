const Header = () => {
    return (
        <div className="container-fluid page-header mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: "400px"}}>
                <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Detail Page</h4>
                <div className="d-inline-flex">
                    <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                    <p className="m-0 text-white px-2">/</p>
                    <p className="m-0 text-white">Detail</p>
                </div>
            </div>
        </div>
    );
};

export default Header;