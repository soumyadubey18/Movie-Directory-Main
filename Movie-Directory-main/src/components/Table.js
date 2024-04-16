import React from "react";
const Table = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Movie name"
          name="movie"
          value={editFormData.movie}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="numeric"
          required="required"
          placeholder="Scale of 1 to 10"
          name="rating"
          value={editFormData.rating}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="numeric"
          required="required"
          placeholder="Mins"
          name="duration"
          value={editFormData.duration}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Table;
