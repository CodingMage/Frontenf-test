import EditIcon from "@material-ui/icons/Edit";
function ManageSingleAdmin() {
  return (
    <div className="msa">
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

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Full Name:</div>

            <div className="msa__list-value">Bosun</div>
          </div>

          <div className="msa__list">
            <div className="msa__list-title">Status:</div>

            <div className="msa__list-value status-b">Active</div>
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

      <div className="msa__paper manager">
        <div className="msa__top">
          <div className="msa__top-right">PROFILE PICTURE</div>

          <div className="msa__top-left">
            <EditIcon /> Manage
          </div>
        </div>
        <div className="mas__other">
          <div className="big-avatar"></div>
        </div>
      </div>
    </div>
  );
}

export default ManageSingleAdmin;
