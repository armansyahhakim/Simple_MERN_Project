import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FormEditData = () => {
  const navigate = useNavigate();

  const [npm, setNpm] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  const { id } = useParams();

  //   GetDataById

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/mahasiswa/getData/${id}`
        );
        console.log(response);
        setNpm(response.data.data.npm);
        setName(response.data.data.name);
        setMajor(response.data.data.major);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [id]);

  //   Update Data
  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/mahasiswa/updateData/${id}`, {
        npm,
        name,
        major,
      });
      //   console.log(response);
      navigate("/");
      toast.success("Data successfully updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-data">
      <form onSubmit={updateData}>
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
                  disabled
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
                <button type="submit">Update Data</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FormEditData;
