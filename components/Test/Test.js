import styles from './Test.module.scss';

export function Test() {
  return (
    <div className={styles['test']}>
      <h1 className={styles['test2']}>THIS SHOULD BE THE NEXT SECTION!</h1>
    </div>
  );
}
