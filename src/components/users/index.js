import { useAppState } from "../../hooks/AppStateProvider";
import Row from "./row";
import styles from "./users.module.scss";

export default function Users() {
  const { users, loadingUsers } = useAppState();

  const renderBody = () => {
    if (loadingUsers) {
      return (
        <tr>
          <td colSpan={8}>Loading...</td>
        </tr>
      );
    }

    if (!users?.length) {
      return (
        <tr>
          <td colSpan={8}>No users to display</td>
        </tr>
      );
    }

    return users.map((user) => <Row key={user.id} user={user} />);
  };

  return (
    <table className={styles.users}>
      <thead>
        <tr>
          <th>Username</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Name</th>
          <th>Email</th>
          <th>Public Repos</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
}
