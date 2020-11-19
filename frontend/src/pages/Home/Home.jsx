import React, { useEffect, useState } from 'react';
import { Button, Space, Divider } from 'antd';
import { connect } from 'react-redux';

import './Home.scss';
import { getTodos } from '../../store/actions/todos';
import CustomModal from '../../components/CustomModal/CustomModal';

const Home = ({ todoList, getTodos }) => {
  const [onModal, setOnModal] = useState(false);
  const [modalType, setModalType] = useState('add');

  useEffect(() => {
    getTodos();
  }, []);

  const handleAddClicked = () => {
    setOnModal(true);
    setModalType('add');
  };

  const handleEditClicked = () => {
    setOnModal(true);
    setModalType('edit');
  };

  const handleOnBack = () => {
    setOnModal(false);
  };

  const handleOnAdd = () => {};

  const handleOnEdit = () => {};

  return (
    <Space direction='vertical' className='home'>
      <Button onClick={handleAddClicked}>Add Todo</Button>
      <CustomModal
        visible={onModal}
        type={modalType}
        onBack={handleOnBack}
        onAdd={handleOnAdd}
        onEdit={handleOnEdit}
      />
      {todoList.map((todoItem) => (
        <>
          <div key={todoItem.title} className='home__todo'>
            <div className='todo__title'>{todoItem.title}</div>
            <div className='todo__controls'>
              <Button onClick={handleEditClicked}>Edit</Button>
              <Button>Delete</Button>
            </div>
          </div>
          <Divider style={{ margin: '5px 0px' }} />
        </>
      ))}
    </Space>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todos.todoList,
});

export default connect(mapStateToProps, { getTodos })(Home);
