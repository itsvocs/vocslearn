import { useAuthContext } from "@/context/AuthContext";
import React from "react";

export default function Deleted() {
  const { user } = useAuthContext();
  return <div></div>;
}
