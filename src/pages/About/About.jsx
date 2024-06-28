// import './About.css';
import { useState, useEffect } from 'react';
import AboutCard from '../../components/Aboutcard';

export default function About() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
      }
    }, { threshold: 1.0 });

    const target = document.getElementById('about-container');
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <div id="about-container" className='aboutContainer'>
        {isIntersecting ? (
          <>
            <AboutCard title='Personal Information'
              point1={ <p>Full Name : Garv Garg</p> }
              point2={ <p>Date Of Birth : 17/04/2005</p> }
            />
            <AboutCard title='Education'
              point1={ <p>The Heriatge School, New Delhi <br /> (2009-2023)</p> }
              point3={ <p>Maharaja Agrasen Institute of Technology, New Delhi <br /> (2023-20XX)</p> }
            />
            <AboutCard title='Interests'
              point1={ <p>Enjoy playing guitar and challenging myself with chess.</p> }
              point2={ <p>Researching and solving logical and analytical problems to uncover new insights</p> }
              point3={ <p>Reading non-fiction books</p> }
            />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}