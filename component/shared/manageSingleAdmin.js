import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function ManageSingleAdmin(singleAdminData) {
  let data = singleAdminData.singleAdminData.singleAdmin.admin;

  return (
    <>
      <div className="msa">
        <div className="mas__top-contain">
          <div className="msa__paper">
            <div className="msa__top">
              <div className="msa__top-right">SINGLE ADMIN</div>

              <div className="msa__top-left">
                <EditIcon /> Edit Profile
              </div>
            </div>
            <div className="list__container">
              <div className="msa__list">
                <div className="msa__list-title">Full Name:</div>

                <div className="msa__list-value">{data.name}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Email Address:</div>

                <div className="msa__list-value">{data.email}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Phone Number:</div>

                <div className="msa__list-value">{data.phone_no}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Sex:</div>

                <div className="msa__list-value">{data.sex}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Country:</div>

                <div className="msa__list-value">{data.country}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">State:</div>

                <div className="msa__list-value">{data.state}</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Status:</div>

                {data.status === "active" ? (
                  <div className="msa__list-value status-b">{data.status}</div>
                ) : (
                  <div className="msa__list-value status-b inactive">
                    {data.status}
                  </div>
                )}

                {/* <div className="msa__list-value status-b">Active</div> */}
              </div>
              <div className="msa__list">
                <div className="msa__list-title">Role:</div>

                <div className="msa__list-value role-b">Administrator</div>
              </div>

              <div className="msa__list">
                <div className="msa__list-title">Twitter:</div>

                <div className="msa__list-value link">
                  https://twitter.com/xchangeadmin
                </div>
              </div>
            </div>
          </div>
          <div
            className="msa__paper msa__about"
            style={{
              marginBottom: "36px",
              marginTop: "39px",
            }}
          >
            <div className="msa__top top__about">
              <div className="msa__top-right">ABOUT</div>
            </div>
            <div className="mas__about-text">{data.about}</div>

            <div className="see__more">
              <span> See me</span> <ExpandMoreIcon />
            </div>
          </div>
        </div>

        <div className="msa__paper manager">
          <div className="msa__top">
            <div className="msa__top-right">PROFILE PICTURE</div>

            <div className="msa__top-left">
              <EditIcon /> Manage
            </div>
          </div>
          <div className="mas__other">
            <div className="big-avatar">
              <img
                src={
                  data.profile_image
                    ? `${data.profile_image}`
                    : `${data.podcast_profile.profile_image}`
                }
                alt="profile Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageSingleAdmin;
