import userService, { User } from "@/services/user-service";
import { CanceledError } from "@/services/api-client";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Reset
    setUsers([]);
    setError("");

    setLoading(true);
    const { request, cancel } = userService.getAll();

    request
      .then((res) => setUsers(res.data))
      .catch((err) =>
        err instanceof CanceledError ? null : setError(err.message)
      )
      .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  return { users, setUsers, error, setError, isLoading };
};

export default useUsers;
