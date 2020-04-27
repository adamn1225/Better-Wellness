import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import UserForm from '../components/UserForm'
import LazyLoad from 'react-lazyload';

import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';

const IndexPage = () => {
    return (
        <Layout>
           
            <section className="topSec">
                <div className="topBanner">
            <div className="formText">
            <Col>
            <h1>Hemp Stuff</h1>
            <h4><strong>Shop our Broad Variety of Hemp Products</strong></h4>

                <div className="topButtons">
                  <div className="quoteButton">
                    <a href="https://www.goldengoatcbd.com"><Button variant="success">Shop Now</Button></a>
                  </div>
                  <div className="careerButton">
                    <Link to="/form"><Button variant="outline">Get Info</Button></Link>
                   </div>
                </div>

                </Col>
                </div>
                </div>
                </section>
                
           <div className="second">
               <Container className="homeShop">     
                   <h1 align="center">Our Products</h1>   
                   <Row>
                   <div className="transportTypes">
                       <Col>
                       >
                       <img className="relaxing" src={require("../images/oil.jpg")} alt="" />
                       
                       <h5>Coconut Oils</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-coconut-oil/"><Button variant="success">Shop Now</Button></a>
                       </Col>

                       <Col>
                      
                       <img className="relaxing" src={require("../images/pain.jpg")} alt="" />
                    
                       <h5>Pain Relief</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/pain-relief/"><Button variant="success">Shop Now</Button></a>
                       </Col>
                       <Col>
                      
                       <img className="relaxing" src={require("../images/honey.jpg")} alt="" />
                       
                       <h5>Honey</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-honey-sticks/"><Button variant="success">Shop Now</Button></a>
                       </Col>
                       </div>
                   </Row>      
                   <Row>
                   <div className="transportTypes">
                       <Col>
                       <LazyLoad height={200} offset={10} >
                       <img className="relaxing" src={require("../images/mct.png")} alt="" />
                       </LazyLoad>
                       <h5>MCT Oils</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/mct-oil/"><Button variant="success">Shop Now</Button></a>
                       </Col>
                       <Col>
                       <LazyLoad height={200} offset={10} >
                       <img className="relaxing" src={require("../images/pets.jpg")} alt="" />
                       </LazyLoad>
                       <h5>Pet Products</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-treats-for-pets/"><Button variant="success">Shop Now</Button></a>
                       </Col>
                       <Col>
                       <LazyLoad height={200} offset={10} >
                       <img className="relaxing" src={require("../images/hempoil.jpg")} alt="" />
                       </LazyLoad>
                       <h5>Essential Oils</h5>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-oil-extract/"><Button variant="success">Shop Now</Button></a>
                       </Col>
                       </div>
                   </Row>
               </Container>

               </div>

            {/* <section>
              <div className="second">
                <Col className="openTransport">
                    <h3>OPEN CAR TRANSPORT</h3>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
                <Col className="enclosed">ENCLOSED CAR TRANSPORT<br /><Button variant="info" size="lg">LEARN MORE</Button></Col>
                <Col className="heavy">
                    <h3>HEAVY TRANSPORT</h3>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
              </div>
          </section> */}

                 <article className="aboutUs">
                  <h3>About Better Wellness</h3><br />
                  <Container>
                      <Col>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </Col>
                  </Container>
                  </article>


                  <Testimonials />


                  <Container>
                    <div className="atozShipping">
                    
                    <Col className="howItIs">
                    <h2>Post About CBD</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Link to="./">Read More</Link>
                    </Col>
                    <Col>
                    <LazyLoad height={200} offset={10} >
                    <img className="relaxing" src={require("../images/relaxing-laptop.jpg")} alt="" />
                    </LazyLoad>
                    </Col>
                    </div>
                    <div className="businessShipping">
                    <Col>
                    <LazyLoad height={200} offset={10} >
                    <img className="businessLoad" src={require("../images/business-shipping.jpg")} alt="" />
                    </LazyLoad>
                    </Col>
                    <Col className="business">
                    <h2>Post About CBD</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Link to="./">Read More</Link>
                    </Col>
                    </div>
                </Container>

                  {/* <Container>
                  <Row>
                  <LazyLoad height={200} offset={10} >
                  <div className="services">
                      <Col>
                      <h6>Insurance Coverage</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/vehicle-security.png"></img>
                      <p>Car transport companies include insurance coverage in your shipping quote. Our selected auto haulers must meet insurance standards before qualifying to be part of our carrier network.</p>
                      </Col>
                      <Col>
                      <h6 className="doorImg">Door-to-Door Service</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/treasure-map.png"></img>
                      <p>Don't worry about having to drive out of your way to meet your driver. The driver will come straight to your pick up location and deliver it exactly where you need your shippment to be.</p>
                      </Col>
                      <Col>
                      <h6 className="noPayImg">No Up Front Payments</h6>
                      <img src="https://img.icons8.com/officel//000000/no-hidden-fee.png"></img>
                      <p>You read that right, $0! The best auto transport companies charge you once the carrier has been dispatched for your order. You can book with your auto transport company now without seeing a bill.</p>
                      </Col>
                      <Col>
                      <h6 className="csImg">Superior Costumer Service</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/service.png"></img>
                      <p>Our professional auto transport company advisors work passionately to ensure you're working with the best vehicle transportation company. They will monitor your shipment around the clock.</p>
                      </Col>
                      </div>
                      </LazyLoad>
                  </Row>
                  </Container> */}
                  <article className='ctaSection'>
                      <Col className="cta">
                      <h2>Get 50% Off With Your Purchase!</h2>
                      <h4>Click to button below to start shopping or <b><a href="tel:954-826-4318">CALL US!</a></b></h4>
                      <Button>Shop Now</Button>
                      </Col>              
                 </article>

          
        </Layout>
    )
}

export default IndexPage
