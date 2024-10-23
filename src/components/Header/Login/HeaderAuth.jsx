import styles from './HeaderAuth.module.css';
import { Avatar } from "@mui/material";
import { AuthButton } from "../../common/buttons/AuthButton";

export const HeaderAuth = () => {
    return (
        <div className={styles.container}>
            <Avatar />
            <AuthButton />
        </div>
    );
};