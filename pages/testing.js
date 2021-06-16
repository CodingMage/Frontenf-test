import { API_URL } from "../config/index";
import { parseCookies } from "../Helper/index";

function Testing(user) {
  console.log(user);
  return <div>Testing</div>;
}

export default Testing;

export async function getServerSideProps({ req }) {
  const { data } = parseCookies(req);
  let user = JSON.parse(data).user;
  console.log(user);

  return {
    props: {
      user,
    },
  };
}

// export async function getServerSideProps({ req }) {
//   const { data } = parseCookies(req);
//   let token = JSON.parse(data).access_token;
//   console.log(data);

//   const res = await fetch(`${API_URL}/api/v1/admins`, {
//     method: "GET",
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   const admins = await res.json();

//   return {
//     props: {
//       admins,
//       token,
//     },
//   };
// }
