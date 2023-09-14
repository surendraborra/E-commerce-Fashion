// import React, { useState } from 'react';
// import './dashboardcontent.css'; // Import your CSS file for styling

// const Dashboardcontent = () => {
//   const [data, setData] = useState([25, 50, 75, 100]); // Sample data for the graph
//   const userCount = 500; // Sample user count
//   const totalSales = 15000; // Sample total sales
//   const productCount = 50; // Sample product count
//   const orderCount = 200; // Sample order count

//   return (
//     <div className="dashboardcontent">
//       <div className="chart">
//         {data.map((value, index) => (
//           <div
//             key={index}
//             className="bar"
//             style={{ height: `${value}px` }}
//           ></div>
//         ))}
//       </div>

//       <div className="info-section">
//         <div className="info-card">
//           <h2>Users</h2>
//           <p>{userCount}</p>
//         </div>
//         <div className="info-card">
//           <h2>Sales</h2>
//           <p>${totalSales}</p>
//         </div>
//         <div className="info-card">
//           <h2>Products</h2>
//           <p>{productCount}</p>
//         </div>
//         <div className="info-card">
//           <h2>Orders</h2>
//           <p>{orderCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboardcontent;

import React, { useState } from 'react';
import './dashboardcontent.css'; // Import your CSS file for styling

const Dashboardcontent = () => {
  const [data, setData] = useState([25, 50, 75, 100]); // Sample data for the graph
  const userCount = 500; // Sample user count
  const totalSales = 15000; // Sample total sales
  const productCount = 50; // Sample product count
  const orderCount = 200; // Sample order count

  return (
    <div className="dashboardcontent">
      <div className="info-section">
        <div className="info-card">
          <h2>Users</h2>
          <p>{userCount}</p>
        </div>
        <div className="info-card">
          <h2>Sales</h2>
          <p>${totalSales}</p>
        </div>
        <div className="info-card">
          <h2>Products</h2>
          <p>{productCount}</p>
        </div>
        <div className="info-card">
          <h2>Orders</h2>
          <p>{orderCount}</p>
        </div>
      </div>

      <div className="chart">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Dashboardcontent;
