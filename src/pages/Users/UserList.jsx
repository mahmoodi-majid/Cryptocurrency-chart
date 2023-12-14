import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import "./UserList.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function UserList() {
  const [userDatas, setUserDate] = useState(userRows);
  const userDelete = (userId) => {
    setUserDate(userDatas.filter((user) => user.id != userId));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      with: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="userListuser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {/* <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize = {3}
        disableRowSelectionOnClick
      /> */}
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
