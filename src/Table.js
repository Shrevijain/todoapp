function Table({ tableData, handleDeleteRow, handleEditRow, defaultValue }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>StudentName</th>
          <th>University</th>
          <th>Subject1</th>
          <th>Subject2</th>
          <th>Subject3</th>
          <th>Gender</th>
          <th></th>
        </tr>

        {tableData.map((data, index) => {
          return (
            defaultValue || (
              <tr key={index}>
                <td>{index}</td>
                <td>{data.StudentName}</td>
                <td>{data.University}</td>
                <td>{data.subject1}</td>
                <td>{data.subject2}</td>
                <td>{data.subject3}</td>
                <td>{data.gender}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditRow(index)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteRow(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          );
        })}
      </thead>
    </table>
  );
}

export default Table;
