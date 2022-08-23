import _debounce from "lodash/debounce";
import { useAppState } from "../../hooks/AppStateProvider";
import { MIN_QUERY_LENGTH } from "../../utils/constant";
import styles from "./search-bar.module.scss";

export default function SearchBar() {
  const { searchUsers } = useAppState();

  const handleQueryChange = (e) => {
    if (e.target.value.length < MIN_QUERY_LENGTH) {
      return;
    }
    searchUsers(e.target.value);
  };
  // avoid too many API calls
  const debounceChange = _debounce(handleQueryChange, 300);

  return (
    <div className={styles.root}>
      <input
        className={styles.search}
        onChange={debounceChange}
        placeholder="Please input the username or email"
      />
    </div>
  );
}
