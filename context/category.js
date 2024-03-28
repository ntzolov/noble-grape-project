'use client';

import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

export const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [updatingCategory, setUpdatingCategory] = useState({
    name: 'asd',
  });
  const apiRoute =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_PRODUCTION
      : process.env.NEXT_PUBLIC_API_LOCAL;

  async function createCategory() {
    try {
      const response = await fetch(`${apiRoute}/admin/category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data);
      } else {
        toast.success('Category created!');
        setName('');
        setCategories([data, ...categories]);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error ocurred. Try again!');
    }
  }

  async function fetchCategories() {
    try {
      const response = await fetch(`${apiRoute}/admin/category`);
      const data = response.json();

      if (!response.ok) {
        toast.error(data);
      } else {
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error ocurred. Try again!');
    }
  }

  async function updateCategory(name) {
    const response = await fetch(`${apiRoute}/admin/category/${updatingCategory?._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data);
    } else {
      toast.success('Category updated!');
      setCategories(
        categories.map((category) => {
          category._id === updatingCategory._id ? data : category;
        })
      );
      setUpdatingCategory(null);
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error('An error ocurred. Try again!');
    }
  }

  async function deleteCategory() {
    try {
      const response = await fetch(`${apiRoute}/admin/category/${updatingCategory?._id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data);
      } else {
        toast.success('Category deleted!');
        setCategories(categories.filter((category) => category._id !== updatingCategory._id));
        setUpdatingCategory(null);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error ocurred. Try again!');
    }
  }

  return (
    <CategoryContext.Provider
      value={{
        name,
        setName,
        categories,
        setCategories,
        updatingCategory,
        setUpdatingCategory,
        createCategory,
        fetchCategories,
        updateCategory,
        deleteCategory,
      }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategory = () => useContext(CategoryContext);
