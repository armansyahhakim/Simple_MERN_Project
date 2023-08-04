import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

const AppCRUD = () => {
  const [dataStudent, setDataStudent] = useState([]);

  //   Get Data
  const getData = async (req, res) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/mahasiswa/getData"
      );
      console.log(data.data);
      setDataStudent(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   delete data
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/mahasiswa/deleteData/${id}`
      );
      console.log(response);
      getData();
      toast.success("Data successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="app-crud">
        <Link to="/addData" className="add-data">
          Add Data
        </Link>
        <table>
          <tbody>
            <tr>
              <th>No</th>
              <th>NPM</th>
              <th>NAME</th>
              <th>MAJOR</th>
              <th>ACTION</th>
            </tr>
            {dataStudent.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  No data
                </td>
              </tr>
            ) : (
              <>
                {dataStudent.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                      <td>{data.npm}</td>
                      <td>{data.name}</td>
                      <td>{data.major}</td>
                      <td>
                        <Link
                          to={`/updateData/${data._id}`}
                          className="fa-solid fa-pen-to-square"
                          title="Edit Data"
                        ></Link>
                        <i
                          className="fa-solid fa-trash"
                          title="Delete Data"
                          onClick={() => {
                            return confirm("Are you sure?")
                              ? deleteData(data._id)
                              : "";
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppCRUD;
