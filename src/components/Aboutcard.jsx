// import React from 'react'
// import './AboutCard.css';

// function Aboutcard(props) {
//   return (
//     <div className='aboutCard'>
//         <h1 className='aboutCardTitle'>{ props.title }</h1>
//         <div className='aboutCardDescription'>
//         <ul>
//             <li>{ props.point1 }</li>
//             <li>{ props.point2 }</li>
//             <li>{ props.point3 }</li>
//         </ul>
//         </div>
//     </div>
//   )
// }

// export default Aboutcard

import React from 'react';
import '../stylesheets/AboutCard.css';

function AboutCard(props) {
  return (
    <div className='aboutCard'>
      <h1 className='aboutCardTitle'>{props.title}</h1>
      <div className='aboutCardDescription'>
        <ul>
          <li>{props.point1}</li>
          <li>{props.point2}</li>
          <li>{props.point3}</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;

