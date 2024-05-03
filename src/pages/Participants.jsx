import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import NavbarContent from "../components/navbar";

function Participants() {
  const [users, setUsers] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/scrum/fetchUsers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const formattedUsers = data.map((user) => ({
        ...user,
        dateCreated: new Date(user.dateCreated).toLocaleString(),
      }));
      setUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "name", headerName: "Navn", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "dateCreated", headerName: "Dato Registrert", width: 150 },
  ];

  const getRowId = (row) => row.userID;

  return (
    <div>
      <NavbarContent>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Deltakere
        </Typography>
        <div style={{ height: 600, width: "90%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            getRowId={getRowId}
          />
        </div>
      </NavbarContent>
    </div>
  );
}

export default Participants;
