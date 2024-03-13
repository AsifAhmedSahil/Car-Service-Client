import React from 'react'
import Swal from 'sweetalert2';

const BookingRow = ({booking,handleDelete}) => {
    const {price,img,service,date,_id} = booking

    
  return (

    
    <tr>
        
        <td>
        <div className="avatar">
              <div className="rounded w-24 h-24">
                {img && <img src={img} />}
              </div>
            </div>
        </td>
        <td>
          {service}
          
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost bg-red-600 text-white uppercase btn-xs">delete</button>
        </th>
      </tr>
  )
}

export default BookingRow
