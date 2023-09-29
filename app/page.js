// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const [username, setUsername] = useState("");
//   return (
//     <>
//       <h1 className="mb-5 text-2xl">enter your name</h1>
//       <form>
//         <input
//           className="border 2 border-zinc-800 px 4 py 2 text xl"
//           type="text"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             console.log(username);
//           }}
//         />
//       </form>
//     </>
//   );
// };

// export default page;

// upto this is deomo of two way binding
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setusers(data);
  };
  useEffect(() => {
    getUsers();
  }, []); //use effect se bina click hue button pe data load ho rha

  return (
    <>
      <button
        onClick={getUsers}
        className=" bg-green-400 text-white px-4 py-2 rounded font bold "
      >
        Gwt data
      </button>
      <div className="p-8 text-white bg-slate-800 mt-5">
        <li>
          {users.map((e) => {
            return (
              <li>
                {e.username} ------ <a href={`/${e.id}`}> explore </a>
              </li>
            );
          })}
        </li>
      </div>
    </>
  );
};

export default page;
