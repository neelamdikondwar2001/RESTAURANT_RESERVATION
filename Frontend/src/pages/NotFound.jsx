import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const NotFound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>LOOKS LIKE YOU ARE LOST</h1>
        <p>We can't seem to find the page you are looking for</p> {/* Corrected <P> to <p> */}
        <Link to="/">BACK TO HOME {" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};
