import React from 'react';

const DashboardRow = ({product}) => {
    const {name, img , price, _id}=product
    return (
        <div>
              <tr>
      <th>
      <button  className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
              {
                product?.img &&  
                 <img src={product.img}alt="Avatar Tailwind CSS Component" />
              }
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{}</div>
            </div>
          </div>
        </td>
        <td>
          {/* {serviceName} */}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button  className="btn btn-ghost btn-xs"></button>
        </th>
      </tr>
   
        </div>
    );
};

export default DashboardRow;