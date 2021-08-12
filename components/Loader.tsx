import styles from "../styles/Loader.module.css";
export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div
        style={{
          height: "30px",
          width: "200px",
          backgroundColor: "blue",
          color: "white",
          fontSize: "20px",
          wordSpacing: "1px",
          letterSpacing: "1px",
          marginTop: "70px",
        }}
      >
        {" "}
        Loading ...
      </div>
    </div>
  );
}
