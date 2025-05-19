import Footer from '@/components/Basics/Footer';
import Navbar from '@/components/Basics/navbar';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="min-h-[calc(100vh-250px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
