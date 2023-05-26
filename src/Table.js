function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>StudentName</th>
          <th>University</th>
          <th>Subject1</th>
          <th>Subject2</th>
          <th>Subject3</th>
          <th>Gender</th>
        </tr>

        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.StudentName}</td>
              <td>{data.University}</td>
              <td>{data.subject1}</td>
              <td>{data.subject2}</td>
              <td>{data.subject3}</td>
              <td>{data.gender}</td>
            </tr>
          );
        })}
      </thead>
    </table>
  );
}

export default Table;
