import { useState } from "react";
import ProductListApp from "./apps/ProductListApp";
import StateAndFormsApps from "./apps/StateAndFormsApps";
import FetchDataApp from "./apps/FetchUsersApp";

const application = [
  {
    value: "formState",
    description: "Form and State Apps",
    app: <StateAndFormsApps />
  },
  {
    value: "productList",
    description: "Product List",
    app: <ProductListApp />,
  },
  {
    value: "fetchData",
    description: "Fetch Data",
    app: <FetchDataApp />,
  },
  ];

function App() {
  const [selectedApp, setSelectedApp] = useState(applications[2].value);

return (
  <>
    <label>
      <h5>Choose Application:</h5>
    </label>
    <select
      className="form-select mb-5"
      onChange={(evt) => setSelectedApp(evt.target.value)}
      defaultValue={selectedApp}
      >
      {applications.map((state) => (
        <option key={state.value} value={state.value}>
          {state.description}
        </option>
        ))}
    </select>
    {applications.find((state) => state.value === selectedApp)!.app}
  </>
  );
}

export default App;
