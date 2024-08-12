import React from "react";

import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The Only Thing We Are Serious About Is Food!!</p>
          </div>
          <p className="mid">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima a
            ipsam nesciunt porro atque debitis doloremque quo aut, sapiente odio
            fuga officia. Eveniet repudiandae odit tempore nobis eligendi dolore
            sapiente alias nisi, quidem repellendus? Maiores aspernatur numquam
            repellat sequi sint consequuntur, culpa alias! Excepturi, natus.
            Illo nulla eos atque vel?
          </p>
          <Link to={"/"} >Explore Menu
           <span>
            <HiOutlineArrowNarrowRight/>
           </span>
           </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};
