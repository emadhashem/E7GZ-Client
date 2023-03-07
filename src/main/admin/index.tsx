import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import GroupPage from "./groupPage/GroupPage";
import MyGroupsPage from "./myGroupsPage/MyGroupsPage";

function Admin() {
  return (
    <Routes>
      <Route path="/">
        <Route index={true} element={<MyGroupsPage />} />
        <Route path=":title" element={<GroupPage />} />
      </Route>
    </Routes>
  );
}

export default Admin;
