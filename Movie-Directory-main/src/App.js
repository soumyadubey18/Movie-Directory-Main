import React, { useState, Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const data = [
  {
    // "id": 1,
    movie: "Bahubali",
    rating: "5",
    duration: "135",
  },
  {
    movie: "Bajrangi Bhaijan",
    rating: 7,
    duration: 140
  },
  {
    movie: "Agnipath",
    rating: 8,
    duration: 130
  },
  {
    movie: "Bhul bhuliya 2",
    rating: 8.3,
    duration: 140,
  },
  {
    movie: "Kabir Singh",
    rating: 8.4,
    duration: 125,
  },
];

const data1 = [...data].sort((a, b) => (a.duration < b.duration ? -1 : 1));

data1.map((d) => console.log("without conversion", d.duration));

const App = () => {


  const [details, setdetails] = useState(data);
  const [addFormData, setAddFormData] = useState({
    movie: "",
    rating: "",
    duration: "",
  });

  // debugger
  const[order, setorder]= useState("ASC");
  const sorting = (col) =>{
    if(order === "ASC"){
      const sorted = [...details].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1);
      setdetails(sorted);
      setorder("DSC");
    }
    if(order === "DSC"){
      const sorted = [...details].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1);
      setdetails(sorted);
      setorder("ASC");
    }
  }

  const [editFormData, setEditFormData] = useState({
    movie: "",
    rating: "",
    duration: "",
  });

  const [editdetailId, setEditdetailId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newdetail = {
      movie: addFormData.movie,
      rating: addFormData.rating,
      duration: addFormData.duration,
    };

    const newdetails = [...details, newdetail];
    setdetails(newdetails);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editeddetail = {
      id: editdetailId,
      movie: editFormData.movie,
      rating: editFormData.rating,
      duration: editFormData.duration,
    };

    const newdetails = [...details];

    const index = details.findIndex((detail) => detail.id === editdetailId);

    newdetails[index] = editeddetail;

    setdetails(newdetails);
    setEditdetailId(null);
  };

  const handleCancelClick = () => {
    setEditdetailId(null);
  };



  return (
    <div className="app-container">
      

      <h1>Movie directory</h1>
      
      <form onSubmit={handleAddFormSubmit}>
        <label>Movie</label>
        <input
          type="text"
          pattern="([a-zA-Z])"
          name="movie"
          required="required"
          // inputMode="alphabate"
          placeholder="Movie name"
          onChange={handleAddFormChange}
        />
        <label>Rating</label>
        <input
          type="number"
          pattern="[0-9]{0,1}"
          inputmode="numeric"
          name="rating"
          required="required"
          placeholder="Scale of 1 to 10"
          onChange={handleAddFormChange}
        />
        <label>Duration</label>
        <input
          type="number"
          pattern="[0-300]*"
          inputmode="numeric"
          name="duration"
          required="required"
          placeholder="Mins"
          onChange={handleAddFormChange}
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
          <label>Search</label>
        <input
          type="text"
          name="search"
          required="required"
          placeholder="Search..."
          onChange={handleAddFormChange}
        />
            <tr>
              <th onClick={() =>sorting("movie")}>Movie</th>
              <th onClick={() =>sorting("rating")}>Rating</th>
              <th onClick={() =>sorting("duration")}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <Fragment>
                {editdetailId === detail.id ? (
                  <Table
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Form detail={detail} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
