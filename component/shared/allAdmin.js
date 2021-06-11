import React from "react";
import Layout from "./Layout";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Link from "next/link";

function AllAdmin({ adminData }) {
  console.log(adminData);
  return (
    <div className="alladmin__paper">
      <div className="alladmin__top">
        <div className="alladmin__top-left">ALL ADMIN</div>

        <div className="alladmin__top-right">
          <Link href="/dashboard/alladmin/createadmin">
            <button>
              <AddCircleOutlineIcon /> NEW
            </button>
          </Link>
        </div>
      </div>

      <div className="alladmin__2">
        <div className="two__left">
          <span>show</span>
          <select>
            <option selected value="10">
              10
            </option>
            <option value="1">1</option>
          </select>
          <span>entries</span>
        </div>
        <div className="two__right">
          <span>search</span>
          <input type="text" />
        </div>
      </div>

      <div className="alladmin__3">
        <div className="alladmin__3-head">Admin</div>

        <div className="alladmin__3-head">Role</div>

        <div className="alladmin__3-head">Email Address</div>

        <div className="alladmin__3-head">Phone Number</div>

        <div className="alladmin__3-head">Status</div>

        <div className="alladmin__3-head">Action</div>
      </div>

      {adminData.map((data) => (
        <>
          <div className="alladmin__4" key={data.id}>
            <div className="alladmin__4__avatar"></div>
            <div className="alladmin__4__names">
              <span> {data.name}</span>
              <span>{data.role}</span>
              <span>{data.email ? data.email : "N/A"}</span>
              <span>{data.phone_no ? data.phone_no : "N/A"}</span>
              <span></span>
            </div>
            {data.status === "active" ? (
              <div className="alladmin__4__status">{data.status}</div>
            ) : (
              <div className="alladmin__4__status inactive">{data.status}</div>
            )}

            <div className="alladmin__4__more">
              <select>
                <option selected>More</option>
                <option value="Manage">Manage</option>
                <option value="Make Inactive">Make Inactive</option>
              </select>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default AllAdmin;
