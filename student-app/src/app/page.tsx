import AuthHeader from "@/components/layout/navbar/AuthHeader";
import Login from "@/features/authentication/Login";

export default function Home() {
  return (
    <div>
      <AuthHeader />
      <Login />
    </div>
  );
}
