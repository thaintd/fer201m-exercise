import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PortalService } from "../../lib/service/admin-service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentDelete(props) {
  const { show, handleClose, studentDelete } = props;

  const handleDeleteUser = async () => {
    let res = await PortalService.deleteUser(studentDelete.id);
    if (res) {
      handleClose();
      toast.success("delete user success");
    }
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
          <Modal.Title>Delete student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">
              do you want to delete this student
            </label>
            <h5> email: {props.studentDelete.email}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#198754" }}
            onClick={handleDeleteUser}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentDelete;
