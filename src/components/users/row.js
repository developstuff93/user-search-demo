import { formatDate } from "../../utils/constant";
import styles from "./users.module.scss";

export default function Row({ user }) {
  if (!user || !user.login) {
    return null;
  }

  const {
    id,
    login: username,
    url,
    avatarUrl,
    name,
    email,
    repositories: { totalCount: repoTotalCount },
    createdAt,
    updatedAt,
    location,
  } = user;

  return (
    <tr className={styles.user} key={id}>
      <td>
        <a href={url} target="_blank">
          {username}
        </a>
      </td>
      <td className={styles.avatar}>
        <a href={avatarUrl} target="_blank">
          <img src={avatarUrl} />
        </a>
      </td>
      <td>{location}</td>
      <td>{name}</td>
      <td>{email ? <a href={`mailto:${email}`}>{email}</a> : null}</td>
      <td>
        <a href={`${url}?tab=repositories`} target="_blank">
          {repoTotalCount}
        </a>
      </td>
      <td>{formatDate(createdAt)}</td>
      <td>{formatDate(updatedAt)}</td>
    </tr>
  );
}
