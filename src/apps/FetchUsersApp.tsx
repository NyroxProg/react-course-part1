import useUsers from "@/hooks/useUsers";
import userService, { User } from "@/services/user-service";

function GetUsersApp() {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  /**
   * Ամփոփեք լավատեսորեն թարմացված օգտատիրոջ տվյալների վերադարձման տրամաբանությունը
   *՝ սխալի դեպքում հաղորդագրությամբ։
   */
  function setUserWithUndo(newUsers: User[]) {
    const originalUsers = [...users];
    setUsers(newUsers);

    return {
      revertWithError: (error: string) => {
        setError(error);
        setUsers(originalUsers);
      },
    };
  }

  const deleteUser = ({ id }: User) => {
    const { revertWithError } = setUserWithUndo(
      users.filter((user) => user.id !== id)
    );
    userService.delete(id).catch((err) => {
      revertWithError(err.message as string);
    });
  };

  /*
   * Նշում. Շփոթեցնող է թվում, որ մենք նույն օգտատիրոջը երկու անգամ ենք ավելացնում. Մեկ անգամ
   * լավատեսորեն և կրկին POST-ի հաջող ավարտից հետո։ Սա աշխատում է
   * այն պատճառով, որ `users` օբյեկտը մենք փոխանցում ենք `setU-ին։
   */
  const addUser = () => {
    const username = prompt(`New username:`)?.trim();
    if (username) {
      const newUser = { id: 0, username };
      const { revertWithError } = setUserWithUndo([newUser, ...users]);
      userService
        .create(newUser)
        .then(({ data: savedUser }) => {
          setUsers([savedUser, ...users]);
        })
        .catch((err) => {
          revertWithError(err.message);
        });
    }
  };

  const updateUser = (user: User) => {
    const username = prompt(`Change username ${user.username} to:`)?.trim();

    if (username) {
      const patchedUser = { ...user, username };
      const { revertWithError } = setUserWithUndo(
        users.map((u) => (u.id === user.id ? patchedUser : u))
      );
      userService.update(patchedUser).catch((err) => {
        revertWithError(err.message);
      });
    }
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.username}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GetUsersApp;
