import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useApp_Context_Provider } from "../../Context/App_Context";

const UserTable = () => {
  const { getUserData, user } = useApp_Context_Provider()
  useEffect(() => { getUserData(1) }, [user.search, user.status, user.from_date, user.to_date]);
  const onPageChange = (page) => { getUserData(page) };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Name",
      selector: row => row.name,
      width: "150px"
    },
    {
      name: "Email",
      selector: row => row.email,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Status",
      selector: row => row === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Hold</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Active</button>
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to='/users/view' className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to='/users/update' className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
        <button className="btn btn-outline-dark rounded-0 btn-sm"><FaCheck /></button>
      </div>,
      width: "200px"
    }
  ];

  if (user.error_message) {
    return <div className="text-center">{user.error_message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={user.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={user.isLoading}
          paginationTotalRows={user.pagination?.total_data}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default UserTable