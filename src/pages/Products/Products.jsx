import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import "./Products.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { products } from "../../data";

export default function Products() {
  const [productData, setproductData] = useState(products);

  const productDelete = (producId) => {
    setproductData(productData.filter((product) => product.id != producId));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListuser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
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
        disableSelectionOnClick
        pageSize={4}
      /> */}
      <DataGrid
        rows={productData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  );
}
