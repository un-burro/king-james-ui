import styles from "./styles.module.css";


export default function Line({ gap_right = "0", gap_bottom = "0" }) {

    const lineStyling = { marginRight: gap_right,
                          marginBottom: gap_bottom, };

    return <div style={lineStyling}
                className={styles.line} />;

}