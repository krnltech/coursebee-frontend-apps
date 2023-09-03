import Footer from "@/components/layout/Footer";
import AppHeader from "@/components/layout/navbar/AppHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CourseBee - Profile",
  description: "Profile of the student",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <AppHeader />
      <div className="max-w">{children}</div>
      <Footer />
    </div>
  );
}
