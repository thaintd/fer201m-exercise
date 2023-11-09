import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { PortalService } from "../../lib/service/admin-service";

export default function Classroom() {
  const [classroomList, setClassroomList] = useState([]);
  const [classroom, setClassroom] = useState("");
  const [teacher, setTeacher] = useState("");
  const getUsers = async (selectedClassroom) => {
    const res = await PortalService.getALLUser();

    if (res && res.data) {
      const classroom = res.data.filter(
        (user) =>
          user.classroom === selectedClassroom && user.role === "STUDENT"
      );
      setClassroomList(classroom);
      const teacher = res.data.filter(
        (user) =>
          user.classroom === selectedClassroom && user.role === "TEACHER"
      );
      const teacherName = teacher.map((person) => person.name);
      setTeacher(teacherName);
    }
  };
  const handleSelectClass = (e) => {
    const selectedClassroom = e.target.value;
    setClassroom(selectedClassroom);
    getUsers(selectedClassroom);
  };

  useEffect(() => {
    getUsers(classroom);
  }, [classroom]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Form.Select
          aria-label="Default select example"
          style={{ maxWidth: "300px", margin: "20px", marginLeft: "4px" }}
          onChange={handleSelectClass}
        >
          <option>Open this select class room</option>
          <option value="Class A">Class A</option>
          <option value="Class B">Class B</option>
          <option value="Class C">Class C</option>
        </Form.Select>
        <div className="d-flex">
          <h4 className="p-4">Teacher: </h4>
          <h4 className="p-4">{teacher}</h4>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {classroomList &&
            classroomList.length > 0 &&
            classroomList.map((item, index) => {
              return (
                <tr key={`classroom-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
