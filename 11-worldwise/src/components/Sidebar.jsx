import styles from "./Sidebar.module.css";
function Sidebar({ children }) {
  return (
    <div className={styles.sidebar}>
      {children}

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright (c) {new Date().getFullYear()} Author. All Rights
          Reserved by WorldWise Inc..
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
