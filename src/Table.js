function Table({ tableData, handleDeleteRow }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>StudentName</th>
          <th>University</th>
          {/* <th>State</th> */}
          {/* <th>SelectOption</th> */}
          <th>Subject1</th>
          <th>Subject2</th>
          <th>Subject3</th>
          <th>Gender</th>
          <th></th>
        </tr>

        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 101}</td>
              <td>{data.StudentName}</td>
              <td>{data.University}</td>
              {/* <td>{data.State}</td> */}
              {/* <td>{data.SelectOption}</td> */}
              <td>{data.subject1}</td>
              <td>{data.subject2}</td>
              <td>{data.subject3}</td>
              <td>{data.gender}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteRow(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </thead>
    </table>
  );
}

export default Table;
