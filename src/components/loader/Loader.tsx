import styles from "./loader.module.css";

interface Props {
  isLoading?: boolean;
}

export function Loader({ isLoading = true }: Props) {
  return <>{isLoading && <div className={styles.spinner}></div>}</>;
}
