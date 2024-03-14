import React from 'react'
import Swal from 'sweetalert2';

const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {
    const {price,img,service,date,_id,status} = booking

    
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
        <th>
          { status === 'confirm' ? <span className='text-purple-600 font-bold'>Confirmed</span>:
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-primary rounded-xl">Please Confirm</button>}
        </th>
      </tr>
  )
}

export default BookingRow
