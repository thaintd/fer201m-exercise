import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { PortalService } from "../../lib/service/admin-service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentAddNew(props) {
  const { show, handleClose, handleUpdateTables } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [classroom, setClassroom] = useState("");
  const [password, setPassword] = useState("student@123");
  const handleSave = async () => {
    if (!name || !email || !image) {
      toast.error("Please fill in all required fields");
      return;
    }
    let res = await PortalService.postCreateUser(
      role,
      email,
      name,
      image,
      classroom,
      password
    );
    if (res) {
      setName();
      setEmail();
      setImage();
      setRole("STUDENT");
      setClassroom("");
      setPassword("");
      toast.success("A teacher is created succeed!");
      handleClose();
      props.handleUpdateTables({
        name: name,
        email: email,
        image: image,
        role: role,
        classroom: classroom,
        password: password,
      });
    } else {
      toast.error("An error");
    }
    console.log(res);
  };
  return (
    <div className="modal show">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Link</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Class Room</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setClassroom(e.target.value);
              }}
            >
              <option>Open this select class room</option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
              <option value="Class C">Class C</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              value="STUDENT"
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value="student@123"
              disabled
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#198754" }}
            onClick={() => {
              handleSave();
            }}
          >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentAddNew;
