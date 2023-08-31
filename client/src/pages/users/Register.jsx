import React from "react";

const Register = () => {
    return (
        <section className="position-relative py-5 overflow-hidden vh-100">
            <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
            <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
            <div className="container position-relative mx-auto">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 mb-5">
                        <div>
                            <h2 className="display-5 fw-bold mb-4 text-white">
                                Keep Track of your income and expenses flow
                            </h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 ms-auto">
                        <div className="p-5 bg-light rounded text-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
