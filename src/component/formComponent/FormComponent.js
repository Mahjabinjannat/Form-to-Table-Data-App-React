import { useEffect, useState } from "react";
import "./FormComponent.css";

function FormComponent(props) {
  const [tableData, setTableData] = useState([
    {
      firstName: "Mahjabin",
      lastName: "Jannat",
      email: "mahjabinjannat153@gmail.com",
      age: "24",
    },
    {
      firstName: "Maisha",
      lastName: "Jannat",
      email: "maishajannat153@gmail.com",
      age: "19",
    },
  ]);

  console.log(tableData);
  function onClickButton() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const newUser = {
      firstName: fname,
      lastName: lname,
      email: email,
      age: age,
    };
    let newArray = [];
    // newArray.push(tableData[0]);
    // newArray.push(tableData[1]);
    // newArray.push(newUser);

    for (let i = 0; i < tableData.length; i++) {
      newArray.push(tableData[i]);
    }
    newArray.push(newUser);
    setTableData(newArray);

    //console.log(newArray);
    //setTableData();
  }

  function handleAction(index) {
    const filteredArray = tableData.filter((item, idx) => {
      return index != idx;
    });
    // for (let i = 0; i < tableData.length; i++) {
    //   if (i === index) {
    //     continue;
    //   } else {
    //     deletedItemArray.push(tableData[i]);
    //   }
    // }
    setTableData(filteredArray);
  }

  return (
    <div>
      <div className="container">
        <div className="inputs">
          <div className="input">
            <input id="fname" type="text" placeholder="First Name" />
          </div>
          <div className="input">
            <input id="lname" type="text" placeholder="Last Name" />
          </div>
          <div className="input">
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div className="input">
            <input id="age" type="number" placeholder="Age" />
          </div>
        </div>
        <div className="submit-container" onClick={onClickButton}>
          Submit
        </div>
      </div>
      <div className="table-container">
        <table style={{ borderCollapse: "collapse" }} id="table">
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  width: "150px",
                  height: "40px",
                  padding: "10px",
                  background: "#eaeaea",
                }}
              >
                First Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  width: "150px",
                  height: "40px",
                  padding: "10px",
                  background: "#eaeaea",
                }}
              >
                Last Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  width: "200px",
                  height: "40px",
                  padding: "10px",
                  background: "#eaeaea",
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid black",
                  width: "150px",
                  height: "40px",
                  padding: "10px",
                  background: "#eaeaea",
                }}
              >
                Age
              </th>
              <th
                style={{
                  border: "1px solid black",
                  width: "150px",
                  height: "40px",
                  padding: "10px",
                  background: "#eaeaea",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              //console.log(data.firstName);
              return (
                <tr key={index} style={{}}>
                  <td
                    style={{
                      width: "150px",
                      textAlign: "center",
                      border: "1px solid black",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    {data.firstName}
                  </td>
                  <td
                    style={{
                      width: "150px",
                      textAlign: "center",
                      border: "1px solid black",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    {data.lastName}
                  </td>
                  <td
                    style={{
                      width: "200px",
                      textAlign: "center",
                      border: "1px solid black",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    {data.email}
                  </td>
                  <td
                    style={{
                      width: "150px",
                      textAlign: "center",
                      border: "1px solid black",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    {data.age}
                  </td>
                  <td
                    style={{
                      width: "150px",
                      textAlign: "center",
                      border: "1px solid black",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    <button
                      onClick={() => {
                        handleAction(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default FormComponent;
