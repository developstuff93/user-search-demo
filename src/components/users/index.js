import { useAppState } from "../../hooks/AppStateProvider";
import Row from "./row";
import styles from "./users.module.scss";

export default function Users() {
  const { users } = useAppState();

  return (
    <table className={styles.users}>
      <thead>
        <tr>
          <th>Username</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Name</th>
          <th>Email</th>
          <th>Public repositories</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
