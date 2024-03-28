import CategoryCreate from '@/components/category/CategoryCreate/page';
import styles from './page.module.scss';
import CategoryList from '@/components/category/CategoryList/page';

export default function AdminCategory() {
  return (
    <section className={styles['category-container']}>
      {/* <div className={styles['category-create']}>cat create</div>
      <div className={styles['category-list']}>cat list</div> */}
      <CategoryCreate />
      <CategoryList />
    </section>
  );
}
