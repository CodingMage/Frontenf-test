import React, { useState } from "react";
import Layout from "./Layout";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "@material-ui/icons/Close";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import DoneIcon from "@material-ui/icons/Done";
import axiosConfig from "../../helpers/axiosConfig";

//Dialog

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function AllAdmin({ adminData, access_token }) {
  const router = useRouter();
  //DIALOG FUNCIONS
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [miscData, setMiscData] = useState({ name: "", id: "" });
  const getData = (name, id) => {
    handleClickOpen();
    setMiscData({ name: name, id: id });
  };

  const disableAdmin = () => {
    axiosConfig
      .put(
        `v1/admin/${miscData.id}/disable`,
        { status: "inactive" },
        {
          headers: { authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        handleClose();
      })

      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="alladmin__paper">
        <div className="alladmin__top">
          <div className="alladmin__top-left">ALL ADMIN</div>

          <div className="alladmin__top-right">
            <Link href="/dashboard/alladmin/createadmin">
              <a>
                <button>
                  <AddCircleOutlineIcon /> NEW
                </button>
              </a>
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
                <div className="alladmin__4__status inactive">
                  {data.status}
                </div>
              )}

              <div className="alladmin__4__more">
                <select>
                  <option selected>More</option>
                  <option
                    value="Manage"
                    onClick={() =>
                      router.push({
                        pathname: `/dashboard/alladmin/manage/${data.id}`,
                      })
                    }
                  >
                    Manage
                  </option>
                  <option
                    value="Make Inactive"
                    onClick={() => {
                      console.log(data.name);
                      getData(data.name, data.id);
                    }}
                  >
                    Make Inactive
                  </option>
                </select>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="overlay">
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
        >
          <div className="overlay__content">
            <DialogTitle>
              <div className="ovl__title">
                <div className="overlay__title">Confirm your action</div>
                <CloseIcon onClick={handleClose} />
              </div>
            </DialogTitle>

            <DialogContent>
              <div className="overlay__middle">
                <NotInterestedIcon />
                <div className="overlay__middle-text">
                  Are you sure you want to disable
                </div>
                <div className="overlay__middle-subtext">{miscData.name}</div>
              </div>
            </DialogContent>
            <DialogActions>
              <div className="overlay__btn">
                <button onClick={disableAdmin}>
                  <DoneIcon />
                  <span>proceed</span>
                </button>
                <button onClick={handleClose}>
                  <CloseIcon />
                  <span>Cancel</span>
                </button>
              </div>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default AllAdmin;
