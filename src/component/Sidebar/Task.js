import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import DoughnutChart from '../Dashboard/DoughnutChart';
import { useAuth } from '../AuthContext';

function Task() {
  const [tasks, setTasks] = useState([]);
  const { state } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      if (state && state.isAuthenticated && state.user && state.user.email) {
        try {
          const response = await axios.get (`https://backend-e88g.onrender.com/users/tasks?email=${state.user.email}`);

          if (response.status === 200) {
            setTasks(response.data.stasks);
          } else {
            console.error('Failed to fetch tasks');
          }
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };

    fetchTasks();
  }, [state]);

 
  // const handleDelete = async (email) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:3001/deleteTask/${email}`);
  //     if (response.status === 200) {
  //       // If the deletion is successful, update the UI by fetching tasks again
  //     } else {
  //       console.error('Task deletion failed');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting task:', error);
  //   }
  // };



  return (
    <div>
      <h3>Tasks</h3>
      <DoughnutChart tasks={tasks} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Link</th>
             <th>Completed On</th>
            {/*<th>Action</th> */}
          </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
  <tr key={task._id}>
    <td>{task.taskName}</td>
    <td>{task.description}</td>
    <td>{task.status}</td>
    <td>{task.link}</td>
    <td>{task.completedOn}</td>
    <td>
              {/* <Button variant="danger" onClick={() => handleDelete(state.user.email, task._id)}>
                Delete
              </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Task;
