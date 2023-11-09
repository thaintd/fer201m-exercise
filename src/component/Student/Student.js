import React, { useState, useEffect } from "react";
import { PortalService } from "../../lib/service/admin-service";
import Table from "react-bootstrap/Table";
import StudentAddNew from "./StudentAddNew";
import StudentDelete from "./StudentDelete";
import StudentEdit from "./StudentEdit";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Student(props) {
  const [studentList, setStudentList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [studentDelete, setStudentDelete] = useState({});
  const [iShowStudentAddNew, setIShowStudentAddNew] = useState(false);
  const [iShowStudentEdit, setIsShowStudentEdit] = useState(false);
  const [isShowStudentDelete, setIsShowStudentDelete] = useState(false);
  const handleClose = () => {
    setIShowStudentAddNew(false);
    setIsShowStudentEdit(false);
    setIsShowStudentDelete(false);
    getUsers();
  };
  useEffect(() => {
    getUsers();
  }, [dataUserEdit]);

  const getUsers = async () => {
    const res = await PortalService.getALLUser();
    if (res && res.data) {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("users"));
      if (userFromLocalStorage && userFromLocalStorage.role === "ADMIN") {
        const studentUsers = res.data.filter((user) => user.role === "STUDENT");
        setStudentList(studentUsers);
      } else if (
        userFromLocalStorage &&
        userFromLocalStorage.role === "STUDENT"
      ) {
        setStudentList(userFromLocalStorage ? [userFromLocalStorage] : []);
      }
    }
  };

  const handleUpdateTables = (student) => {
    setStudentList([student, ...studentList]);
  };

  const handleEditFromModal = (editedStudent) => {
    const studentIndex = studentList.findIndex(
      (student) => student.id === editedStudent.id
    );

    if (studentIndex !== -1) {
      const updatedStudentList = [...studentList];
      updatedStudentList[studentIndex] = editedStudent;
      setStudentList(updatedStudentList);
    }
    setIsShowStudentEdit(false);
  };

  const handleEditUser = (student) => {
    setDataUserEdit(student);
    setIsShowStudentEdit(true);
  };
  const handleDeleteUser = (studentDelete) => {
    setIsShowStudentDelete(true);
    setStudentDelete(studentDelete);
  };
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filteredStudents = studentList.filter((student) => {
      return student.email.toLowerCase().includes(searchValue.toLowerCase());
    });
    setStudentList(filteredStudents);
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
        {studentList[1] ? (
          <button
            type="button"
            className="btn btn-success my-3"
            style={{ float: "right" }}
            onClick={() => setIShowStudentAddNew(true)}
          >
            <AiOutlinePlusCircle
              style={{
                marginTop: "-1px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            />
            Add new
          </button>
        ) : (
          ""
        )}
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
          {studentList &&
            studentList.length > 0 &&
            studentList.map((item, index) => {
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
                    {studentList[1] ? (
                      <button
                        type="button"
                        className="btn btn-warning"
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
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <StudentAddNew
        show={iShowStudentAddNew}
        handleClose={handleClose}
        handleUpdateTables={handleUpdateTables}
      />
      <StudentEdit
        show={iShowStudentEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        handleEditFromModal={handleEditFromModal}
      />
      <StudentDelete
        show={isShowStudentDelete}
        handleClose={handleClose}
        studentDelete={studentDelete}
      />
    </div>
  );
}

export default Student;
