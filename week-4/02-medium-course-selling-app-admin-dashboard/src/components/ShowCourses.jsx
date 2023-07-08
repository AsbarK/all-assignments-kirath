import React, { useEffect } from "react";

function ShowCourses() {
  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, [courses]);
  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <div>
      <h1>Course Page</h1>
      {courses.map((c, index) => (
        <Course
          key={index}
          title={c.title}
          description={c.description}
          price={c.price}
        />
      ))}
    </div>
  );
}

function Course(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
      <h6>{props.price}</h6>
    </div>
  );
}

export default ShowCourses;
