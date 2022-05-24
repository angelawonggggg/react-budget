import React from "react";
import { useRouter } from "next/router";

export default function LogIn() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        router.push("/");
        console.log("Logout successful");
      } else {
        console.log("Logout failed");
      }
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
