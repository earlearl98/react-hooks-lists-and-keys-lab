// import React from 'react';

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   return 
  
//   <div className="navbar">
//      {links.map((link, index) => (
//         <a key={index} href={`#${link.toLowerCase()}`}>
//           {link.toLowerCase()}
//         </a>
//       ))}
    
//   </div>
  
// }

// export default NavBar;




export default function NavBar() {

  const links = ["home", "about", "projects"];
  return (
    <div className="navbar">
     {links.map((link, index) => (
       <a key={index} href={`#${link.toLowerCase()}`}>
         {link.toLowerCase()}
        </a>
      ))}
    
   </div>
  
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" >About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active"  >Projects</a>
//         </li>
//       </ul>
      
//     </div>
//   </div>
// </nav>
    // </div>
  )
} 























