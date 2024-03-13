import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;

  const { user } = useContext(AuthContext);

  const handleServices = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      date,
      price: price,
      service: _id,
    };

    console.log(order);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">book service: {title}</h2>
      <form onSubmit={handleServices}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div>
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;