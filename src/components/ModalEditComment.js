import React, { useState } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { Button, Form } from 'react-bootstrap';
import { editComment } from '../actions';
import { connect } from 'react-redux';


const ModalEditComment = ({ editData, dispatch, newsId }) => {
    const [show, setShow] = useState(false);
    const [activeComment, setActiveComment] = useState(editData)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        dispatch(editComment(newsId, activeComment));
        handleClose();
        
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "text":
                setActiveComment({ ...activeComment, text: value });
                break;

        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comment edit</Modal.Title>
                </Modal.Header>
                <Form>

                    <Form.Group>
                        <Form.Control type="text" placeholder="text" value={activeComment.text} onChange={e => setActiveComment({ ...activeComment, text: e.target.value })} />
                    </Form.Group>

                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default connect()(ModalEditComment);