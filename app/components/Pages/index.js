"use client";
import React, { useState } from 'react';


import ReactDOM from 'react-dom';



import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import {useRef} from 'react';

import { useContext } from 'react';

import ReviewTab from '../Review';
import SpecsTable from '../Specifications/table';







const DetailsPage=()=>{
    const[zoomImage,setZoomImage]=useState('https://m.media-amazon.com/images/I/61kZ8MUKn0L._SL1280_.jpg');
     
    const[activeTabs, setactiveTabs]=useState(0);
    const zoomSlider=useRef();


    var settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        fade:false,
        arrows:true,
    }


    const goto=(url)=>{
        setZoomImage(url);
         
    }


    return(
        <section className="detailsPage">
            <div className='container '>
                
                    <div className='row product '>
                        
                            <div className='col-md-4 zoom '>

                                <div className='areesh '>

                                    <div><InnerImageZoom zoomScale={1.5} src={`${zoomImage}`}/></div>


                                   



                                </div>

                                


                                
                                        <div className='productZoom'>

                                        


                                                <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                                                   <div className='item'>
                                                    <img src="https://m.media-amazon.com/images/I/61v9lm6A0tL._SX679_.jpg" className=' object-fit-scale carousel' onClick={()=>goto("https://m.media-amazon.com/images/I/61v9lm6A0tL._SX679_.jpg")} />
                                                        

                                                    </div>
                                                    <div className='item'>
                                                        <img src="https://m.media-amazon.com/images/I/61x6XuKeEGL._SL1080_.jpg" className='object-fit-scale carousel' onClick={()=>goto("https://m.media-amazon.com/images/I/61x6XuKeEGL._SL1080_.jpg")}/>
                                                        

                                                    </div>

                                                    <div className='item '>
                                                        <img src='https://computerbazar.co.in/wp-content/uploads/2023/08/Screenshot-2023-08-15-215435.png' className='object-fit-scale carousel'onClick={()=>goto('https://computerbazar.co.in/wp-content/uploads/2023/08/Screenshot-2023-08-15-215435.png')} />
                                                        

                                                    </div>
                                                    

                                                </Slider>


                                        </div>

                                
                           

                            </div>
                            <div className='col-md-8 productInfo '>
                                <h2 className='text-red-800'>Intel Core I9-14900K LGA 1700 New Gaming Desktop Processor 24 Cores (8 P-Cores + 16 E-Cores) with Integrated Graphics - Unlocked</h2>
                                <hr></hr>
                                
                                

                                <div className='pricesec d-flex justify-content-between align-items-center '>

                                    <span className='currentPrice'><h2><b>₹48,000</b></h2></span>
                                    <span className='userStatus'><div className='userVerified'>Verified  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135Zm51 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Z"/></svg></div></span>
                                </div>
                                
                                <hr></hr>
                               
                                <p >Intel® Core™ i9-14900K desktop processor. Featuring Intel Thermal Velocity Boost, Intel® Turbo Boost Max Technology 3.0 Frequency, PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, unlocked Intel® Core™ i9 desktop processors are optimized for enthusiast gamers and serious creators to help deliver high performance. </p>

                               


                              <div className='addToCart pt-4 pb-4 d-flex align-items-center'>
                                
                                <div className='counterSec'>
                                  <input type="number"  min="1" max="15" placeholder='1' />
                                    
                                    
                                    

                                </div>

                                <button className='CartButton'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" fill="#000000"/></svg>
                                Add To Cart
                                    
                                </button>

                                <button className='BuyNow'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z " fill='#000000'/></svg> Buy Now
                                </button>

                                <button className='liked' >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" fill="#000000"/></svg>
                                </button>

                               </div>
                               <hr></hr>

                               

                                <div className='basicInfo d-flex justify-content-between align-items-center'>
                                <div className='name'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6A86B"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.5-49T480-432q63 0 124.5 17T721-366q22 13 34.5 34t12.5 44v96H192Z"/></svg><b>Name: </b>User</div>
                                <div className='location'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6A86B"><path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-96Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Z"/></svg><b> Location: </b> Dwarka Sec22</div>
                                </div>
                                <hr></hr>
                                <br></br>

                               <h4>Available Payment Options</h4>
                               <br></br>


                               <div className='payment d-flex'>
                                

                                <div className='paymentOption' >
                                <strong>COD</strong>


                                </div>

                                <div className='paymentOption' >
                                    <strong>UPI</strong>
                                


                                </div>

                                <div className='paymentOption' >
                                <strong><i>Visa</i></strong>


                                </div>

                               </div>
                                
                                

                            </div>

                           
                        
                        
                    </div>
                    <br/>



                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <button onClick={()=>setactiveTabs(0)}>Specifications</button>
                                </li>
                                
                                <li className='list-inline-item'>
                                    <button onClick={()=>setactiveTabs(1)}>Reviews</button>
                                </li>

                            </ul>
                        </div>

                        {activeTabs===0 &&
                        <div className='tabContent'>
                            <br></br>
                            
                            <br></br>

                            <SpecsTable></SpecsTable>
                           


                        </div> }
                        
                        
                        
                        {activeTabs===1 && 
                        <div className='tabContent'>
                            <br></br>
                            <br></br>

                            
                            
                            <div className='row'>
                               <div className='reviews
                               '>
                                  <h3>Top Reviews</h3> 
                                  <br></br>
                                  <ReviewTab/>

                                

                                    <ReviewTab/>

                                    <br></br>

                                    <form className='reviewForm'>
                                        <h4>Add Review</h4>
                                        <br></br>
                                        <div className='form-group'>
                                        <textarea className='form-control' placeholder='Write A Review'></textarea>

                                        </div>

                                        <div className='row'>
                                            <div className='reviews'>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control' placeholder='Name'/>
                                                </div>
                                            </div>


                                            <div className='reviews'>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control' placeholder='Phone Number'/>
                                                </div>
                                            </div>


                                            <div className='form-group'>
                                                    <input type='text' className='form-control' placeholder='Email'/>
                                            </div>
                                            <br></br>

                                            <div className='form-group' >
                                                <button className="border rounded-3" id="sub">Submit Review</button>
                                            </div>


                                        </div>


                                        
                                    </form>
                                
                                </div>


                               

                               
                                



                            
                                
                                


                            </div>
                        </div>}

                        

                    </div>
                   
                
                 
            </div>
        </section>
    )
}

export default DetailsPage;