import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { PortalService } from "../../lib/service/admin-service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentEdit(props) {
  const { show, handleClose, dataUserEdit, handleEditFromModal } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [classroom, setClassroom] = useState("");
  const handleEditUser = async () => {
    const id = dataUserEdit.id;
    let res = await PortalService.putUpdateUser(
      id,
      name,
      image,
      email,
      role,
      classroom
    );
    if (res) {
      handleEditFromModal({
        name: dataUserEdit.name,
        email: dataUserEdit.email,
        image: dataUserEdit.image,
        role: dataUserEdit.role,
        classroom: dataUserEdit.classroom,
      });
      handleClose();
      toast.success("update studnet success");
    }
  };
  useEffect(() => {
    if (show) {
      setName(dataUserEdit.name);
      setEmail(dataUserEdit.email);
      setImage(dataUserEdit.image);
      setRole(dataUserEdit.role);
      setClassroom(dataUserEdit.classroom);
    }
  }, [dataUserEdit]);

  return (
    <div className="modal show">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Link</label>
            <input
              value={image}
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
              onChange={(e) => setRole(e.target.value)}
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
              handleEditUser();
            }}
          >
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentEdit;
