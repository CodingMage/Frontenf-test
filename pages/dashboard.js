const { default: Layout } = require("../component/shared/Layout");

function dashboard() {
  return (
    <div>
      <Layout
        route="Dashboard"
        msg="Welcome Bosun Jones"
        main="Dashboard, It Works!"
      />
    </div>
  );
}

export default dashboard;
