import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url , {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
              if(data.deletedCount > 0){
                const remaining = bookings.filter(booking => booking._id !==  id)
                setBookings(remaining)
                Swal.fire({
                  title: "Deleted!",
                  text: "Deleted Successful...!",
                  icon: "success",
                });
              }
        }
        )
      }
    });
  };

  const handleBookingConfirm = (id) => {

    
    fetch(`http://localhost:5000/bookings/${id}`,{
          method:'PATCH',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount >0){
            // update 
            const remaining = bookings.filter(booking => booking._id !== id)
            const updated = bookings.filter(booking => booking._id === id)
            updated.status = 'confirm';
            const newBookings = [updated,...remaining]
            setBookings(newBookings);
            Swal.fire({
              title: "Confirmed!",
              text: "Confirmed Successful...!",
              icon: "success",
            });
          }
        })
  };
  return (
    <div className="overflow-x-auto">
      <table className="table mt-24 mb-24">
        {/* head */}
        <thead>
          <tr className="uppercase text-black font-bold text-xl">
            <th className="font-bold">Image</th>
            <th className="font-bold">Services</th>
            <th className="font-bold">Date</th>
            <th className="font-bold">Prices</th>
            <th>Delete</th>
            <th>Confirm Order</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
