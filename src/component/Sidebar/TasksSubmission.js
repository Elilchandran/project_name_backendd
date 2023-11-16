import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const TaskSubmission = () => {
  const [newTask, setNewTask] = useState({
    taskName: '',
    description: '',
    status: '', // Update the status field to be 'SUBMITTED TASK' upon submission
    completedOn: '',
    link: '',
  });

  const { state } = useAuth();

  const handleTaskSubmission = async (e) => {
    e.preventDefault();

    if (state && state.isAuthenticated && state.user && state.user.email) {
      try {
        const response = await axios.post('https://backend-e88g.onrender.com/submitTask', {
  ...newTask,
  email: state.user.email,
  status: 'SUBMITTED TASK',
});


        if (response.status === 200) {
          console.log('Task submitted:', response.data.task);
          // Add the submitted task to the UI if needed
        } else {
          console.error('Task submission failed');
        }
      } catch (error) {
        console.error('Error submitting task:', error);
      }
    } else {
      console.error('User email not found in state');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div>
      <h2>Task Submission</h2>
      <form onSubmit={handleTaskSubmission}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="taskName"
            value={newTask.taskName}
            onChange={handleChange}
            placeholder="Task Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={newTask.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        {/* <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="status"
            value={newTask.status}
            onChange={handleChange}
            placeholder="Status"
          />
        </div> */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="completedOn"
            value={newTask.completedOn}
            onChange={handleChange}
            placeholder="Completed On"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="link"
            value={newTask.link}
            onChange={handleChange}
            placeholder="Task Link"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskSubmission;
