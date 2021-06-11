import DoneIcon from "@material-ui/icons/Done";
import { InfoOutlined } from "@material-ui/icons";
import { useState } from "react";

function AdminForm(token) {
  const [adminForm, setAdminForm] = useState({
    name: "",
    email: "",
    phone: "",
    sex: "Male",
    state_id: "",
    city_id: "",
    country_id: " ",
    password: "",
    about: "",
    profile_image: "",
    facebook: "",
    twitter: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    status: "active",
    permissions: "delete-users",
  });

  const createAdmin = () => {
    console.log(adminForm);
    console.log(token);
  };
  return (
    <div className="adminform">
      <div className="adminform__paper">
        <div className="paper__header">CREATE ADMIN</div>
        <div className="form">
          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Full Name:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.name}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">Last Name:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Email address:</div>
              <div className="form__1-input__input">
                <input
                  type="email"
                  value={adminForm.email}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">Phone Number:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.phone}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="form__2-input">
            <div className="form__2-input__label">Sex:</div>
            <div className="form__2-input__input">
              <select
                value={adminForm.sex}
                onChange={(e) =>
                  setAdminForm({ ...adminForm, sex: e.target.value })
                }
              >
                <option selected value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form__2-input">
            <div className="form__2-input__label">Country:</div>
            <div className="form__2-input__input">
              <select
                value={adminForm.country_id}
                onChange={(e) =>
                  setAdminForm({ ...adminForm, country_id: e.target.value })
                }
              >
                <option selected value="Nigeria">
                  Nigeria
                </option>
                <option value="UAE">UAE</option>
              </select>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">State:</div>
              <div className="form__1-input__input">
                <select
                  value={adminForm.state_id}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, state_id: e.target.value })
                  }
                >
                  <option selected value="Lagos">
                    Lagos
                  </option>
                  <option value="Ogun state">Ogun state</option>
                </select>
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">City:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.city_id}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, city_id: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="form__1-input ">
            <div className="form__1-input__label">About</div>
            <div
              className="form__1-input__input  "
              style={{
                height: "unset",
                maxWidth: "unset",
                marginBottom: "27px",
              }}
            >
              <textarea
                name="about"
                value={adminForm.about}
                onChange={(e) =>
                  setAdminForm({ ...adminForm, about: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="form__3-input">
            <div className="form__3-input__label">About</div>
            <div className="form__3-input__input">
              <button>Choose File</button>
              <input type="text" placeholder="No file chosen" />
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Facebook Profile:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.facebook}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, facebook: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">Twitter Handle:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.twitter}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, twitter: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Instagram Handle:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.instagram}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, instagram: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">TicTok Handle:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.tiktok}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, tiktok: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">YouTube Page:</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.youtube}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, youtube: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">LinkedIn Profile::</div>
              <div className="form__1-input__input">
                <input
                  type="text"
                  value={adminForm.linkedin}
                  onChange={(e) =>
                    setAdminForm({ ...adminForm, linkedin: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="form__2-input">
            <div className="form__2-input__label">Role:</div>
            <div className="form__2-input__input">
              <select>
                <option selected value="Administrator">
                  Administrator
                </option>
                <option value="Stories Author">Stories Author</option>
                <option value="Orders Manager">Orders Manager</option>
              </select>
            </div>
          </div>

          <div className="adminWarning">
            <div className="adminWarning__header">ADMINISTRATION</div>

            <div className="adminWarning__subheader">
              This user will have access to every module and feature in the
              system.
            </div>
          </div>

          <div className="form__2-input">
            <div className="form__2-input__label">Status:</div>
            <div className="form__2-input__input">
              <select
                value={adminForm.status}
                onChange={(e) =>
                  setAdminForm({ ...adminForm, status: e.target.value })
                }
              >
                <option selected value="active">
                  Active
                </option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="info__warning">
            <InfoOutlined /> The password will automatically be generated and
            sent to the user’s email address.
          </div>

          <div className="create-btn">
            <button onClick={createAdmin}>
              <DoneIcon /> Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
