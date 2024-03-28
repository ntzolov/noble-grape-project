'use client';

import { useCategory } from '@/context/category';
import styles from './page.module.scss';

export default function CategoryCreate() {
  const {
    name,
    setName,
    updatingCategory,
    setUpdatingCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategory();

  return (
    <div className={styles['category-create']}>
      <p>Create category</p>
      <input
        type='text'
        value={updatingCategory ? updatingCategory?.name : name}
        onChange={(e) =>
          updatingCategory
            ? setUpdatingCategory({ ...updatingCategory, name: e.target.value })
            : setName(e.target.value)
        }
      />
      <div className={styles['category-create_buttons']}>
        <button
          className={`${'btn'} ${styles['btn--primary']}`}
          onClick={updatingCategory ? updateCategory : createCategory}>
          {updatingCategory ? 'Update' : 'Create'}
        </button>
        {updatingCategory && (
          <>
            <button
              className={`${'btn'} ${styles['btn--delete']}`}
              onClick={(e) => {
                e.preventDefault;
                deleteCategory();
              }}>
              Delete
            </button>

            <button
              className={`${'btn'} ${styles['btn--clear']}`}
              onClick={() => setUpdatingCategory(null)}>
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}
