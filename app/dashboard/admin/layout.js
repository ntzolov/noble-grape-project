import AdminNav from '@/components/navigation/AdminNav/AdminNav';

export default function AdminDashboard({ children }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
