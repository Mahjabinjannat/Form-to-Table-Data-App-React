import FormComponent from "./component/formComponent/FormComponent";

function App() {
  const users = [
    {
      firstName: "Mahjabin",
      lastName: "Jannat",
      email: "mahjabinjannat153@gmail.com",
      age: 24,
    },
    {
      firstName: "Maisha",
      lastName: "Jannat",
      email: "maishajannat@gmail.com",
      age: 21,
    },
  ];
  return (
    <div>
      <FormComponent user={users} />
    </div>
  );
}

export default App;
