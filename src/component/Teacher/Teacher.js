import React, { useState, useEffect } from "react";
import { PortalService } from "../../lib/service/admin-service";
import Table from "react-bootstrap/Table";
import TeacherAddNew from "./TeacherAddNew";
import TeacherEdit from "./TeacherEdit";
import TeacherDelete from "./TeacherDelete";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Teacher(props) {
  const [teacherList, setTeacherList] = useState([]);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [teacherDelete, setTeacherDelete] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [iShowTeacherAddNew, setIShowTeacherAddNew] = useState(false);
  const [iShowTeacherEdit, setIsShowTeacherEdit] = useState(false);
  const [isShowTeacherDelete, setIsShowTeacherDelete] = useState(false);
  const handleClose = () => {
    setIShowTeacherAddNew(false);
    setIsShowTeacherEdit(false);
    setIsShowTeacherDelete(false);
    getUsers();
  };
  useEffect(() => {
    getUsers();
  }, [dataUserEdit]);

  const getUsers = async () => {
    const res = await PortalService.getALLUser();
    if (res && res.data) {
      const teacherUsers = res.data.filter((user) => user.role === "TEACHER");
      setTeacherList(teacherUsers);
    }
  };

  const handleUpdateTables = (teacher) => {
    setTeacherList([teacher, ...teacherList]);
  };

  const handleEditFromModal = (editedTeacher) => {
    const teacherIndex = teacherList.findIndex(
      (teacher) => teacher.id === editedTeacher.id
    );

    if (teacherIndex !== -1) {
      const updatedTeacherList = [...teacherList];
      updatedTeacherList[teacherIndex] = editedTeacher;
      setTeacherList(updatedTeacherList);
    }
    setIsShowTeacherEdit(false);
  };

  const handleEditUser = (teacher) => {
    setDataUserEdit(teacher);
    setIsShowTeacherEdit(true);
  };
  const handleDeleteUser = (teacherDelete) => {
    setIsShowTeacherDelete(true);
    setTeacherDelete(teacherDelete);
  };
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filteredTeachers = teacherList.filter((teacher) => {
      return teacher.email.toLowerCase().includes(searchValue.toLowerCase());
    });
    setTeacherList(filteredTeachers);
  };

  return (
    <div className="container">
      <div className=" d-flex justify-content-between">
        <div className="search m-3 mx-0 col-3">
          <input
            className="form-control"
            placeholder="Search here"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>

        <button
          type="button"
          className="btn btn-success my-3"
          style={{ float: "right" }}
          onClick={() => setIShowTeacherAddNew(true)}
        >
          <AiOutlinePlusCircle
            style={{ marginTop: "-1px", fontSize: "20px", marginLeft: "10px" }}
          />
          Add new
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teacherList &&
            teacherList.length > 0 &&
            teacherList.map((item, index) => {
              return (
                <tr key={`users- ${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger mx-3"
                      style={{ maxWidth: "90px" }}
                      onClick={() => handleEditUser(item)}
                    >
                      <FiEdit
                        style={{
                          marginTop: "-2px",
                          fontSize: "20px",
                          marginLeft: "10px",
                        }}
                      />
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ maxWidth: "110px" }}
                      onClick={() => {
                        handleDeleteUser(item);
                      }}
                    >
                      <RiDeleteBin6Line
                        style={{
                          marginTop: "-2px",
                          fontSize: "20px",
                          marginLeft: "10px",
                        }}
                      />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <TeacherAddNew
        show={iShowTeacherAddNew}
        handleClose={handleClose}
        handleUpdateTables={handleUpdateTables}
      />
      <TeacherEdit
        show={iShowTeacherEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        handleEditFromModal={handleEditFromModal}
      />
      <TeacherDelete
        show={isShowTeacherDelete}
        handleClose={handleClose}
        teacherDelete={teacherDelete}
      />
    </div>
  );
}

export default Teacher;
