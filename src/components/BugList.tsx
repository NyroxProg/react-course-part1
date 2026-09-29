import { produce } from "immer";
import { useState } from "react";

interface Bug {
  id: number;
  title: string;
  fixed: boolean;
}

function BugList() {
  const [bugs, updateBugs] = useState([
    { id: 1, title: "BSOD", fixed: true },
    { id: 2, title: "Crashdump", fixed: false },
    { id: 3, title: "Certificate Expired", fixed: false },
  ]);

  const toggleFixed = (bugId: number) => {
    updateBugs(
      produce((draft: Array<Bug>) => {
        const bug = draft.find((bug) => bug.id === bugId);
        if (bug) bug.fixed = !bug.fixed;
      })
    );
  };

  return (
    <>
      <h1>Bug List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Fixed</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.id}>
              <td>{bug.id}</td>
              <td>{bug.title}</td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFixed(bug.id);
                  }}
                >
                  {bug.fixed ? "Yes" : "No"}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BugList;
