import LayersIcon from "@material-ui/icons/Layers";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
function Layout({ route, msg, main }) {
  return (
    <div className="layout">
      <div className="layout__contain">
        <div className="layout__side">
          <div className="side__misc"></div>
          <div className="side__contain">
            <div className="side__contain-top">
              <div className="avatar"></div>
              <div className="user-name">Bosun Jones</div>
              <div className="user-role">Admin</div>
            </div>

            <div className="side__contain-others">
              <div className="others__header">Navigation</div>
              <div className="others__lists">
                <div className="others__lists-list">
                  <LayersIcon />
                  <div className="list-name">Dashboard</div>
                </div>
                <div className="others__lists-list">
                  <PeopleOutlineIcon />
                  <div className="list-name">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout__right">
          <div className="layout__top">
            <div className="layout__top-contain">
              <div className="top__contain-header">{route}</div>
              <div className="top__contain-subheader">{msg}</div>
            </div>
          </div>

          <div className="main">{main}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
