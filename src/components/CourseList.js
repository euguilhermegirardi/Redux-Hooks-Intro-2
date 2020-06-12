import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Action
function addCourseAction(courseName) {
  return { type: 'ADD_COURSE', courseName }
};

export default function CourseList() {

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction('GraphQL'))
  };

  return (
    <>
    <ul>
      { courses.map(course => <li key={course}>{course}</li>) }
    </ul>

    <button type="button" onClick={addCourse}>Click me</button>
    </>
  );
};
