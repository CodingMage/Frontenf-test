import DoneIcon from "@material-ui/icons/Done";
import { InfoOutlined } from "@material-ui/icons";
import { useState } from "react";

function AdminForm() {
  const [adminForm, setAdminForm] = useState({
    name: "",
    email: "",
    phone: "",
    sex: "",
    state_id: "",
    city_id: "2",
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
    permissions: "",
    status: "",
    permissions: "",
  });
  return (
    <div className="adminform">
      <div className="adminform__paper">
        <div className="paper__header">CREATE ADMIN</div>
        <div className="form">
          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Full Name:</div>
              <div className="form__1-input__input">
                <input type="text" />
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
                <input type="text" />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">Phone Number:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="form__2-input">
            <div className="form__2-input__label">Sex:</div>
            <div className="form__2-input__input">
              <select>
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
              <select>
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
                <select>
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
                <input type="text" />
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
              <textarea name="about"></textarea>
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
                <input type="text" />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">Twitter Handle:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">Instagram Handle:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">TicTok Handle:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="form__1">
            <div className="form__1-input">
              <div className="form__1-input__label">YouTube Page:</div>
              <div className="form__1-input__input">
                <input type="text" />
              </div>
            </div>

            <div className="form__1-input">
              <div className="form__1-input__label">LinkedIn Profile::</div>
              <div className="form__1-input__input">
                <input type="text" />
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
              <select>
                <option selected value="Administrator">
                  Active
                </option>
                <option value="Stories Author">Inactive</option>
              </select>
            </div>
          </div>
          <div className="info__warning">
            <InfoOutlined /> The password will automatically be generated and
            sent to the user’s email address.
          </div>

          <div className="create-btn">
            <button>
              <DoneIcon /> Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
