import { useState, useEffect } from "react";
import React from 'react';
import {useDispatch,useSelector} from'react-redux';
import {addTask, editTask} from '../features.js/task/taskSlice';
import {v4 as uuid} from 'uuid';
import {useNavigate, useParams} from 'react-router-dom';

function TasksForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const params = useParams();
  const tasks  = useSelector(state => state.tasks)

  const handleSumit =(e)=>{
    e.preventDefault();
    if(params.id){
      dispatch(editTask(task))
    }else{
      dispatch(addTask({
        ...task,
        id: uuid(),
      }))
      navigate('/');
    }
  };

  useEffect(()=>{
    if(params.id){
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks])

  return (
    <form onSubmit={handleSumit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-sm font-bold" htmlFor="title">Task:</label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />
      <label className="block text-sm font-bold" htmlFor="description">Description:</label>
      <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      />
      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  );
}

export default TasksForm;
