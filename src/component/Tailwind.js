import axios from 'axios';
import React, { useEffect, useState } from 'react'
import img1 from  "../img/img1.svg"
import img3 from  "../img/img3.png"
import cticon from  "../img/Category Icon.png"
import fotoicon from  "../img/Photo & Icon.png"
import fotoicon2 from  "../img/Photo & Icon2.png"
import fotoicon3 from  "../img/photo icon3.png"
import fotoicon4 from  "../img/photo icon4.png"
import fotoicon5 from  "../img/Photo & Icon5.png"
import fotoicon6 from  "../img/photo icon6.png"
import image from  "../img/Image6.png"
import footer from  "../img/Footer.png"
import imgbg from  "../img/img-bg.png"
import img6 from  "../img/dog.jpg"
import cosmos from  "../img/cosmoc.png"
import icon from  "../img/Icon.png"
import nav from  "../img/nav.png"
export default function Tailwind() {
    const [users,setUsers] = useState([])
    const [header,setHeader] = useState([])
    const [card,setCard] = useState([])
    const [box,setBox] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/navbar').then((res)=>{
          setUsers(res?.data)
        }).catch(err=>{
          console.log(err);
        })
      },[])
      useEffect(()=>{
        axios.get('http://localhost:8000/header').then((res)=>{
            setHeader(res?.data)
        }).catch(err=>{
          console.log(err);
        })
      },[])
      useEffect(()=>{
        axios.get('http://localhost:8000/card').then((res)=>{
            setCard(res?.data)
        }).catch(err=>{
          console.log(err);
        })
      },[])
      useEffect(()=>{
        axios.get('http://localhost:8000/box').then((res)=>{
            setBox(res?.data)
        }).catch(err=>{
          console.log(err);
        })
      },[])
  return (
    <>
   <header className='w-full  h-screen bg-[#2B2B2B]'>
            {
            users.map((item,index)=>{
             return   <nav key={index} className='text-[#fff] d-flex justify-between p-[10px] pb-3'>
                 <h4>{item.name}</h4>
                 <div className='d-flex  gap-4' >
                 <p>{item.title1}</p>
                 <p>{item.title2}</p>
                 <p>{item.title3}</p>
                 <button className=' p-[5] pl-[10px] pr-[10px] rounded-[8px] bg-[#A259FF]'>{item.button}</button>
                 </div>
                </nav>
            })
        }
    
        {
            header.map((item,index)=>{
                return <div key={index}  className=' d-flex justify-center w-full text-[#fff]'>
                    <div className=''>
                        <h1 className='w-[300px]'>{item.name}</h1>
                        <p className='w-[280px]'>{item.desc}</p>
                        <button className=' p-[5] mb-[15px] pl-[10px] pr-[10px] rounded-[8px] bg-[#A259FF]'>{item.button}</button>
                        <div className='d-flex gap-3'>
                            <div>
                                <h5>240k+</h5>
                                <p>Total Sale</p>
                            </div>
                            <div>
                                <h5>240k+</h5>
                                <p>Total Sale</p>
                            </div>
                            <div>
                                <h5>240k+</h5>
                                <p>Total Sale</p>
                            </div>
                        </div>
                    </div>
                    <img src={nav} alt="" className='w-[350px] h-[350px]' />
                </div>
            })
        }
   </header>
   <section className='w-full h-screen bg-[#2B2B2B] text-[#fff] d-flex flex-col justify-center items-center'>
        <h1>Trending Collection</h1>
        <p>Checkout our weekly updated trending collection.</p>
        <div className='d-flex gap-[20px]'>
            <div>
                <img src={img6} alt="" className=' mb-[8px] w-[250px] h-[250px] rounded-[8px]' />
                <div className='d-flex'>
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                    <button className='m-[5px] p-[25px] mb-[15px] rounded-[8px] bg-[#A259FF]'>1025+</button>
                </div>
                <h6>DSGN Animals</h6>
            </div>
            <div>
                <img src={img6} alt="" className=' mb-[8px] w-[250px] h-[250px] rounded-[8px]' />
                <div className='d-flex'>
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                    <button className='m-[5px] p-[25px] mb-[15px] rounded-[8px] bg-[#A259FF]'>1025+</button>
                </div>
                <h6>DSGN Animals</h6>
            </div>
            <div>
                <img src={img6} alt="" className=' mb-[8px] w-[250px] h-[250px] rounded-[8px]' />
                <div className='d-flex'>
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                <img src={img6} alt="" className=' m-[5px] w-[70px] h-[70px] rounded-[8px]' />
                    <button className='m-[5px] p-[25px] mb-[15px] rounded-[8px] bg-[#A259FF]'>1025+</button>
                </div>
                <h6>DSGN Animals</h6>
            </div>
        </div>
   </section>
   <section className='w-full  bg-[#2B2B2B] text-[#fff] d-flex flex-col pt-[50px]'>
    <div className='d-flex justify-around'>
        <div>
        <h1>Top creators</h1>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div>
        <button className='p-[5] pb-2 mb-[15px] pl-[10px] pr-[10px] rounded-[8px] bg-[#A259FF]'>
        View Rankings
        </button>
        </div>
    </div>
  <div className='d-flex flex-wrap gap-5 bg-[#2B2B2B] '>
        {
            card.map((item,index)=>{
                return <div key={index} className='bg-[#535353] mt-5 p-2 rounded-[8px]' >
                    <span className=' bg-[#000000] p-[8px] rounded-[50%]'>{item.id}</span>
                    <img src={img1} alt=""  className='w-[200px] h-[200px]'/>
                    <h4>{item.name}</h4>
                    <span className='d-flex'>
                        <p className='text-[grey]'>{item.sale}</p>
                        <p>{item.price}</p>
                    </span>
                </div>
            })
        }
    </div>
   </section>
   <section className='w-full  bg-[#2B2B2B] text-[#fff] d-flex flex-col pl-[45px] pt-[50px]'>
    <h1>Browse Categories</h1>
    <div className='d-flex flex-wrap gap-2'>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={img3} alt="" />
       <p className='ml-[15px]'>Art</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={cticon} alt="" />
       <p className='ml-[15px]'>Collectibles</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon} alt="" />
       <p className='ml-[15px]'>Music</p>
    </div>
   
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon2} alt="" />
       <p className='ml-[15px]'>Photography</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon3} alt="" />
       <p className='ml-[15px]'>Video</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon4} alt="" />
       <p className='ml-[15px]'>Utility</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon5} alt="" />
       <p className='ml-[15px]'>Sport</p>
    </div>
    <div className='w-[200px] bg-[#535353] rounded-[8px] '>
       <img className='w-[200px]' src={fotoicon6} alt="" />
       <p className='ml-[15px]'>Virtual Worlds</p>
    </div>
    </div>
   </section>
   <section className='w-full  bg-[#2B2B2B] text-[#fff] d-flex flex-col pt-[50px]'>
    <div className='d-flex justify-around'>
        <div>
        <h1>Top creators</h1>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div>
        <button className='p-[5] pb-2 mb-[15px] pl-[10px] pr-[10px] rounded-[8px] bg-[#A259FF]'>
        View Rankings
        </button>
        </div>
    </div>
<div className='d-flex flex-wrap justify-center gap-5'>
        {
            box.map((item,index)=>{
                return <div key={index} className='w-[250px] bg-[#494747] rounded-[5px]'>
                    <img src={image} alt=""  className='w-[250px]'/>
                    <h6>{item.name}</h6>
                    <p className='text-[14px]'>{item.desc}</p>
                    <div className='d-flex gap-[65px]'>
                        <div>
                            <p className='text-[12px] text-[grey]'>{item.price}</p>
                            <p className='text-[12px]'>{item.sale}</p>
                        </div>
                        <div>
                            <p className='text-[12px] text-[grey]'>{item.hight}</p>
                            <p className='text-[12px]'>{item.width}</p>
                        </div>
                    </div>
                </div>
            })
        }
</div>
   </section>
   <section className='pt-[30px] bg-[#2B2B2B]'>
        <img src={imgbg} alt="" />
   </section>
   <section className='bg-[#2B2B2B] w-full p-[20px] text-[#fff] pt-[30px]'>
    <div className='ml-[40px]'>
        <h1>How it works</h1>
        <p>Find out how to get started</p>
    </div>
    <div className='d-flex justify-center gap-2'>
        <div className='w-[300px] bg-[#3b3b3b] rounded-[10px]'>
        <img src={icon} alt="" />
        <h4 className='text-center'>Setup Your wallet</h4>
        <p className='text-center'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>
        <div className='w-[300px] bg-[#3b3b3b] rounded-[10px]'>
        <img src={icon} alt="" />
        <h4 className='text-center'>Setup Your wallet</h4>
        <p className='text-center'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>
        <div className='w-[300px] bg-[#3b3b3b] rounded-[10px]'>
        <img src={icon} alt="" />
        <h4 className='text-center'>Setup Your wallet</h4>
        <p className='text-center'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>
    </div>
   </section>
   <section className='bg-[#2B2B2B] w-full p-[20px] text-[#fff] d-flex justify-center'>
 <div className='w-[80%] bg-[#403e3e] d-flex gap-5 p-[20px] '>
   <div>
    <img src={cosmos} className='w-[90%]' alt="" />
   </div>
   <div>
    <h1>Join our weekly digest</h1>
    <p>Get exclusive promotions & updates straight to your inbox.</p>
 <span className='bg-[#fff]  text-black pt-2 pb-2 rounded-[5px]'>Enter your email here<button className=' p-[7px] pr-[8px] rounded-[8px] bg-[#A259FF]'>Subscribe</button></span>
   </div>
 </div>
   </section>
   <footer>
    <img src={footer} alt="" />
   </footer>
   </>
  )
}
