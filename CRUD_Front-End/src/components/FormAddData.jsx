import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FormAddData = () => {
  const navigate = useNavigate();

  const [npm, setNpm] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

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

  //   Add Data
  const addData = async (e) => {
    e.preventDefault();
    try {
      // Data exist
      await dataStudent.find((data) => {
        if (data.npm == npm) {
          return toast.error("NPM already registered");
        }
      });
      await axios.post("http://localhost:3000/mahasiswa/addData", {
        npm,
        name,
        major,
      });
      //   console.log(response);
      navigate("/");
      toast.success("Data successfully added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-data">
      <form onSubmit={addData}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="npm">NPM</label>
              </td>
              <td>
                <input
                  type="text"
                  id="npm"
                  name="npm"
                  placeholder="Input your NPM"
                  required
                  value={npm}
                  onChange={(e) => {
                    setNpm(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Input your full name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="major">Major</label>
              </td>
              <td>
                <select
                  name="major"
                  id="major"
                  required
                  value={major}
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                >
                  <option value="">Choose your Major</option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Information System">Information System</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Interior Design">Interior Design</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="btn">
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </button>
                <button type="submit">Add Data</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FormAddData;
