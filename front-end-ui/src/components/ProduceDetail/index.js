import React from 'react';
import Login from './../Login/Login'
import './../Home/Home.css';
import Produce from './ProduceDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const P = () => {
    return (<>
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
    <div className="main-top-3">
      <div className="container">
        <div className="row menu-slide">
         
          {/* <div className="col-xl-3 col-lg-4 menu-container">
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
          </div> */}
          
          <div className="col-xl-9 col-lg-8 slide-container">
            <div className="home-main-menu-container">
              <ul className="home-main-menu">

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <Link to="/">Home</Link>                   
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
            
            <Produce/>


          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default P;