import React from 'react';
import './ProduceDetail.css'

const ProduceDetail = () => {
    return (
        <div className="container-fliud">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
                        <div className="theme-title">
                            <img src="http://placekitten.com/400/252" style={{width: "100%", height: "100%"}} />
                        </div>

                        <div className= "container list-type-product">
                            <div className="row">
                                <div className="col-md-4 product-item "><img src="http://placekitten.com/200/126" /></div>
                                <div className="col-md-4 product-item active-item"><img src="http://placekitten.com/200/126" /></div>
                                <div className="col-md-4 product-item"><img src="http://placekitten.com/200/126" /></div>
                            </div>
                        </div>

						{/*<!-- <ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
    </ul>-->*/}
						
					</div>
					<div className="details col-md-6">
                        <h3 className="product-title">Black Fashion</h3>
                        <p>Add your review  </p>
                        <div className="review">
                            <button type="button" className="btn btn-primary"><i className="fa fa-facebook" aria-hidden="true"></i>
                                Share</button>
                            <button type="button" style={{marginLeft: 7}} className="btn btn-danger"><i className="fa fa-instagram" aria-hidden="true"></i>
                                Share</button>
                        </div>

                        <ul style={{marginTop: "15px"}}>
                            <li>Product SKU: 5493AB85RG</li>
                            <li>Category: Laptops & Computer, Mouse, Printers & Ink</li>
                        </ul>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-4"><h4>Price: <span><strong>$180</strong></span></h4></div>
                                <div className="col-md-4"><h5><strike>$220</strike></h5></div>
                            </div>
                        </div>
                                
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button" style={{marginLeft: 10}}><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default ProduceDetail;