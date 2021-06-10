import AdminForm from "../../../component/shared/adminForm.js";
import Layout from "../../../component/shared/Layout.js";
function Createadmin() {
  return (
    <div>
      <Layout
        route="Create Admin"
        msg="Dashboard   /   All Admin    /   Create Admin"
        main={<AdminForm />}
      />
    </div>
  );
}

export default Createadmin;
