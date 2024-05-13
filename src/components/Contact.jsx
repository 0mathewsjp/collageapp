import React from 'react'

const contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1>Contact Us</h1>
                </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Sree Buddha Collage Of Engineering</h5>
    <p class="card-text">  Pattoor P.O., Nooranad <br />
                                        Alappuzha District <br />
                                        Kerala <br />
                                        India <br />
                                        Pin:690529 <br /> College: +91479 2375440,42; <br />
                                        e-mail: principal@sbce.ac.in <br />
                                        <br />
                                        Please use the contact form incase you need to contact the personel directly</p>
  </div>
</div>
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter name' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter name' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Matter</label>
                                <input type="text" className="form-control" placeholder='Enter matter' />
                                </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Submit</button>
                            </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default contact
