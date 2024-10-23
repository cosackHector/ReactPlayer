import styles from './HeaderInput.module.css';

export const HeaderInput= () => {
    return (
        <form className={styles.form}>
            <div className={styles.customInput}>
                <input placeholder='   Поиск плейлиста' type='text' />
            </div>
        </form>
    );
};