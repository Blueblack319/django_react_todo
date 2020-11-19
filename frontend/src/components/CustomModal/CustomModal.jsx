import React from 'react';
import { Modal, Button } from 'antd';

const CustomModal = ({ visible, type, onBack, onAdd, onEdit }) => {
  if (type === 'add') {
    return (
      <Modal
        visible={visible}
        title='Add Todo'
        onCancel={onBack}
        footer={[
          <Button key='back' onClick={onBack}>
            Return
          </Button>,
          <Button key='submit' type='primary' onClick={onAdd}>
            Add
          </Button>,
        ]}>
        <div>Hello</div>
      </Modal>
    );
  }
  if (type === 'edit') {
    return (
      <Modal
        visible={visible}
        title='Edit Todo'
        onCancel={onBack}
        footer={[
          <Button key='back' onClick={onBack}>
            Return
          </Button>,
          <Button key='submit' type='primary' onClick={onEdit}>
            Add
          </Button>,
        ]}>
        <div>Hello</div>
      </Modal>
    );
  }
};

export default CustomModal;
