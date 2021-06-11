import LayersIcon from "@material-ui/icons/Layers";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Link from "next/link";
function Layout({ route, msg, main, name, role }) {
  return (
    <div className="layout">
      <div className="layout__contain">
        <div className="layout__side">
          <div className="side__misc"></div>
          <div className="side__contain">
            <div className="side__contain-top">
              <div className="avatar"></div>
              <div className="user-name">{name}</div>
              <div className="user-role">{role}</div>
            </div>

            <div className="side__contain-others">
              <div className="others__header">Navigation</div>
              <div className="others__lists">
                <div className="others__lists-list">
                  <Link href="/dashboard">
                    <a>
                      <LayersIcon />
                      <div className="list-name">Dashboard</div>
                    </a>
                  </Link>
                </div>
                <div className="others__lists-list">
                  <Link href="/dashboard/alladmin">
                    <a>
                      <PeopleOutlineIcon />
                      <div className="list-name">Users</div>
                    </a>
                  </Link>
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
