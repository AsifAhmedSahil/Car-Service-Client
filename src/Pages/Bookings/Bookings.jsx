import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
