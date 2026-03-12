import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingZalo from "@/components/layout/FloatingZalo";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingZalo />
    </>
  );
}
