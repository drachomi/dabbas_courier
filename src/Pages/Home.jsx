import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'

import './../assets/bootstrap-5/css/bootstrap.css'
import './../assets/fontawesome-5/css/all.css'
import './home.css'
import './../App.css'


function Home() {
  return (
    <>
      {/* Header */}
      <header id='home'>
        {/* Navbar */}
        <Navbar />
        <div className='container contain'>
          <div className="row pt-5">
            <div className="col-md-5">
              <div className="text-container">
                <h1>Dabbas For <br /><span>Couriers</span></h1>
                <h4 className='font-weight-light my-2'>Earn money by delivering goods on your route to work!!</h4>
                <a className='btn btn-solid-lg my-3' href="https://forms.gle/ZipXV4p1HfoNdYfMA">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section id="choose">
        <div className="container p-5 my-4">
          <div className="text-center mb-2">
            <h1>Why Choose Us?</h1>
          </div>
          <div className="row my-5">
            <div className="col-md-4 p-3">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-money-bill-wave fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>Make a quick buck</h5>
                  <p className='text-muted'>Earn easy money by delivering goods with convenience</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-route fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>Deliver along your route</h5>
                  <p className='text-muted'>Deliver products on your way to and from work!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-clock fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>According to your time</h5>
                  <p className='text-muted'>Deliver products at your own pace, in your own time and convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* How to get started */}
      <section id="getStarted">
        <div className="container p-5">
          <h1 className="text-center">How to get started</h1>
          <div className="row my-5 px-5">
            <div className="col-md-6">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-list-alt fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>Fill out the sign-in form</h5>
                  <p>Submit the registration form with all your details, including your route to work.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-list-ol fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>Start taking orders</h5>
                  <p>After registration and verification, you are now eligible to start taking orders and earning!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements">
        <div className="container p-5 my-4">
          <div className="text-center mb-2">
            <h1>Requirements for Dabbas Couriers</h1>
          </div>
          <div className="row my-5 px-5">
            <div className="col-md-6">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-id-badge fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>Valid Identification Documents</h5>
                  <p className='text-muted'>To verify your identity, and to show that you are eligible</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content text-center">
                <div className="content-icon">
                  <span className="fa-stack fa-3x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-mobile-alt fa-stack-1x"></i>
                  </span>
                </div>
                <div className="content-text mt-3">
                  <h5>A smartphone</h5>
                  <p className='text-muted'>With a valid phone number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="copyright bg-gray">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <p className="p-small py-5">Copyright © <a href="https://dabbas.africa">Dabbas Africa</a></p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home