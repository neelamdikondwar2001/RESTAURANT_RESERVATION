import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Success = () => {
  const [countDown,setCountDown] = useState(10);
  const navigate = useNavigate();

  useEffect(()=>{
    const timeoutId = setInterval(()=>{
      setCountDown(preCount=>{
        if(preCount===1){
          clearInterval(timeoutId)
          navigate("/")
        }
        return preCount -1;
      })
    },1000);
return ()=>clearInterval(timeoutId);
  },[navigate])
  return <>
  <section className="notFound">
    <div className="container">
      <img src="/sandwich.png" alt="success" />
      <h1>Redirecting To Home in {countDown} Seconds..</h1>
      <Link to={'/'}>Back To Home <HiOutlineArrowNarrowRight/></Link>
    </div>
  </section>
  </>
}
