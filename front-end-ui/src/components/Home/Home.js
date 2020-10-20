import React from 'react';
import './Home.css'
import './../Footer/Footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => {
    return(
    <div className="container-fluid" style={{padding: 0}}>
    
    <div className="main-top-1">
     
      <div className="main-top-1-left">
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>+012345678</span>
        </div>
        <div>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span>sample@gmail.com</span>
        </div>
      </div>
      
      <div className="main-top-1-right">
        <div>
          <i className="fa fa-bell-o" aria-hidden="true"></i>
          <span>Thông báo</span>
        </div>
        <div>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <span>Trợ giúp</span>
        </div>
        <div className="login-register">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          <Link to="/login">Đăng nhập</Link>
         
          or
          <Link to="/login">Đăng ký</Link>
        </div>
      </div>
    </div>

     
     <div className="main-top-2 logo-search">
      <div>
        <image className="footer-logo" src={require('../../asset/image/footer_logo.png')}/>
      </div>
      <div className="header-input-address">
        <input type="text" placeholder="Search"/>
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div className="cart">
        <a href="#">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span className="badge badge-light">4</span>
        </a>
      </div>
    </div>

    
    <div className="main-top-3">
      <div className="container">
        <div className="row menu-slide">
         
          <div className="col-xl-3 col-lg-4 menu-container">
            <nav className="nav flex-column">
              <ul className="home-menu">
                <li className="home-menu-title">
                    <strike><i className="fa fa-bars" aria-hidden="true"></i></strike>
                    All departments
                </li>
                <li className="drop-horizontal">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                  <div className="drop-horizontal-content">
                    <ul>
                      <li className="drop-horizontal">
                        abc
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <div className="drop-horizontal-content">
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                          </ul>
                        </div>
                      </li>
                      <li>def</li>
                      <li>ikl</li>
                      <li>xyz</li>
                    </ul>
                  </div>
                </li>

                <li className="drop-horizontal">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                  <div className="drop-horizontal-content">
                    <ul>
                      <li className="drop-horizontal">
                        abc
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <div className="drop-horizontal-content">
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                          </ul>
                        </div>
                      </li>
                      <li>def</li>
                      <li>ikl</li>
                      <li>xyz</li>
                    </ul>
                  </div>
                </li>

                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    Automotive & Motorcycle
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
  
            </nav>
          </div>
          
          <div className="col-xl-9 col-lg-8 slide-container">
            <div className="home-main-menu-container">
              <ul className="home-main-menu">

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Home                   
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Pages                   
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Shop                   
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Blog                 
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>

              </ul>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={require('../../asset/image/home-slide-1.jpg')} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={require('../../asset/image/home-slide-2.jpg')} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={require('../../asset/image/home-slide-1.jpg')} alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

{/*     
    <div className="main-top-4 container">
      <div className="main-top-4-title">
        Xu hướng tìm kiếm
      </div>

        <div className="owl-carousel owl-theme owl-carousel-category">
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div>
                <img src={require('../../asset/image/cate-image-1.jpg')} alt=""/>
                <span>Sữa tăng chiều cao</span>
              </div>
            </a>
          </div>
        </div>
     
    </div> */}

    
    <div className="main-top-5 container">
      <div className="row">
        <div className="col-lg-4">
        <a href="">
          <div className="sale-container">
            <div className="sale-title">Special Offer</div>
            <div className="sale-image">
              <img src={require('../../asset/image/sale.png')} alt="" srcset=""/>
              <div> 
                <div>Save</div>
                <div>30%</div>
              </div>
            </div>
            <div className="sale-name-product">Đồng hồ thời trang VAX</div>
            <div className="sale-price">
              <span>$299.00</span>
              <span><strike>$399.00</strike></span>
            </div>
            <div className="progress sale-progress-stock">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </a>
        </div>
        <div className="col-lg-8">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">On sale</a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Featured</a>
              <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Top rated</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row">
                <div className="col-6">
                  <a href="">
                    <div className="card-product">
                      <div className="product-img">
                        <img src={require('../../asset/image/book.png')} alt="" srcset=""/>
                      </div>
                      <div className="product-name">
                        Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                      </div>
                      <div className="product-price-sale">
                        <span>$128.99</span>
                        <span>15% OFF</span>
                      </div>
                      <div className="buyed-number">
                        Đã bán 17k
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-6">
                 <a href="">
                  <div className="card-product">
                    <div className="product-img">
                      <img src={require('../../asset/image/book.png')} alt="" srcset=""/>
                    </div>
                    <div className="product-name">
                      Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                    </div>
                    <div className="product-price-sale">
                      <span>$128.99</span>
                      <span>15% OFF</span>
                    </div>
                    <div className="buyed-number">
                      Đã bán 17k
                    </div>
                  </div>
                 </a>
                </div>

              </div>
              <div className="show-more">
                <a href="">Xem thêm <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="row">
                <div className="col-6">
                  <a href="">
                    <div className="card-product">
                      <div className="product-img">
                        <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
                      </div>
                      <div className="product-name">
                        Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                      </div>
                      <div className="product-price-sale">
                        <span>$128.99</span>
                        <span>15% OFF</span>
                      </div>
                      <div className="buyed-number">
                        Đã bán 17k
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-6">
                 <a href="">
                  <div className="card-product">
                    <div className="product-img">
                      <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
                    </div>
                    <div className="product-name">
                      Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                    </div>
                    <div className="product-price-sale">
                      <span>$128.99</span>
                      <span>15% OFF</span>
                    </div>
                    <div className="buyed-number">
                      Đã bán 17k
                    </div>
                  </div>
                 </a>
                </div>

              </div>
              <div className="show-more">
                <a href="">Xem thêm <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="row">
                <div className="col-6">
                  <a href="">
                    <div className="card-product">
                      <div className="product-img">
                        <img src={require('../../asset/image/printer.png')} alt="" srcset=""/>
                      </div>
                      <div className="product-name">
                        Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                      </div>
                      <div className="product-price-sale">
                        <span>$128.99</span>
                        <span>15% OFF</span>
                      </div>
                      <div className="buyed-number">
                        Đã bán 17k
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-6">
                 <a href="">
                  <div className="card-product">
                    <div className="product-img">
                      <img src={require('../../asset/image/printer.png')} alt="" srcset=""/>
                    </div>
                    <div className="product-name">
                      Sổ tay ghi chép tiện lợi, ghi chép nhanh chóng
                    </div>
                    <div className="product-price-sale">
                      <span>$128.99</span>
                      <span>15% OFF</span>
                    </div>
                    <div className="buyed-number">
                      Đã bán 17k
                    </div>
                  </div>
                 </a>
                </div>

              </div>
              <div className="show-more">
                <a href="">Xem thêm <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div className="main-top-6">
      <div className="container">

        <div className="row hint-today">
          <div className="main-top-6-title">
            Gợi ý hôm nay
          </div>
        </div>

        <div className="row hint-today">
          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>
         
          
          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 hint-today-product">
          <Link to="/produce-detail">
           <div>
              <img src={require('../../asset/image/coppu.jpg')} alt="" srcset=""/>
              <div className="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="product-price">
                <span>$128.99</span>
                <span>Đã bán 17k</span>
              </div>
           </div>
           </Link>
          </div>

        </div>

        <div className="show-more">
          <a href="">Xem thêm <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>

      </div>
    </div>

   
    <div className="main-top-7 container-fluid">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-2">
          <i className="fa fa-gift" aria-hidden="true"></i>
          <div>Great Value</div> 
          Nunc Id Ante Quis Tellus Faucibus Dictum In Eget.</div>

        <div className="col-2">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <div>Worlwide Delivery</div>
          Quisque Posuere Enim Augue, In Rhoncus Diam Dictum Non</div>

        <div className="col-2">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <div>Safe Payment</div>
          Duis Suscipit Elit Sem, Sed Mattis Tellus Accumsan.</div>

        <div className="col-2">
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
          <div>Shop Confidence</div>
          Faucibus Dictum Suscipit Eget Metus. Duis Elit Sem, Sed.</div>

        <div className="col-2">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div> 24/7 Help Center</div>
          Quisque Posuere Enim Augue, In Rhoncus Diam Dictum Non.</div>

        <div className="col-1"></div>
      </div>
    </div>

    
    <div className="container-fluid footer-main">

      <div className="footer-email container-fluid">
        <div className="row">
          <div>
            Sign up to Newsletter
          </div>
          <div className="footer-input-address">
            <input type="text" placeholder="Enter your email address"/>
            <button>Subcribe</button>
          </div>
        </div>
      </div>
  
      <div className="row">
        
        <div className="col-lg-2 col-md-4 col-sm-6">
          <h3 className="footer-title">Information</h3>
            <div className="footer-content">
              <ul className="footer-list">
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="contact.html">Terms & Conditions</a></li>
                <li><a href="login.html">FAQs</a></li>
                <li><a href="login.html">Return Policy</a></li>
              </ul>
            </div>
        </div>
        
        <div className="col-lg-2 col-md-4 col-sm-6">
          <h3 className="footer-title">Customer Service</h3>
          <div className="footer-content">
              <ul className="footer-list">
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="wishlist.html">Wish List</a></li>
                  <li><a href="#">Site Map</a></li>
                  <li><a href="#">Gift Certificates</a></li>
              </ul>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-4 col-sm-6">
          <h3 className="footer-title">Extras</h3>
          <div className="footer-content">
              <ul className="footer-list">
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Gift Certificates</a></li>
                  <li><a href="#">Affiliate</a></li>
                  <li><a href="#">Specials</a></li>
                  <li><a href="#">Site Map</a></li>      
              </ul>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-4 col-sm-6">
          <h3 className="footer-title">My Account</h3>
          <div className="footer-content">
              <ul className="footer-list">
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="wishlist.html">Wish List</a></li>
                  <li><a href="#">Newsletter</a></li>
              </ul>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-8 col-sm-12">
          <image className="footer-logo" src={require('../../asset/image/footer_logo.png')}/>
          <div className="footer-contact">
            <image src={require('../../asset/image/footer_hear.png')}/>
            <div>
              Got questions? Call us 24/7!<br/>
              <b>(800) 8001-8588, (0600) 874 548</b>
            </div>
          </div>
          <div>
            <div><b>Contact info</b></div>
            <div>17 Princess Road, London, Greater London NW1 8JR, UK</div>
          </div>
          
          <ul className="social-footer">
            <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        
        <div className="footer-end">
          © 2020 Copy right by Lorem
        </div>
      </div>
    </div>

  </div>
    )
}

export default Home;