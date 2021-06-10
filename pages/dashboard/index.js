const { default: Layout } = require("../../component/shared/Layout");

function dashboard() {
  return (
    <div>
      <Layout
        route="Dashboard"
        msg="Welcome Bosun Jones"
        main={<div className="main__content">Dashboard, It Works!</div>}
      />
    </div>
  );
}

export default dashboard;
