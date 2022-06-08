import React from "react";
import { useRouter } from "next/router";
import { Button } from "../components/styles/Button";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Logout successful");
        } else {
          console.log("Logout failed");
        }
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <div>
      <Button color="gray" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
