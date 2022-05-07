import React from "react";
import styles from "../styles/data-team.module.css";

export default function DataTeam() {
  return (
    <>
      <input
        type="number"
        name="Equipe"
        id="Equipe"
        min="1"
        max="100"
        className={styles.inputNumber}
        placeholder="Número da equipe"
      />
      <label htmlFor="Upload" className={styles.labelFile}>
        Upload
        <input
          type="file"
          name="Upload"
          id="Upload"
          className={styles.inputFile}
          placeholder="Upload"
        />
      </label>
    </>
  );
}