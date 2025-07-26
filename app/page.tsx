import { auth } from "@/auth";
import SigninButton from "@/components/SigninButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect('/home');
  }

  return (
    <div className="p-4 h-[420px] gap-4 mt-4 flex flex-col items-center justify-center">
      <div className="text-3xl font-bold font-sans">
        <span className="text-violet">Blok</span> Streamline Your Ideas.
      </div>
      <div className="text-center text-lg font-semibold text-gray-400">
        A flexible workspace that keeps all your thoughts, tasks and projects in
        one clean view.
      </div>
      <SigninButton value={"Get Started"} />
    </div>
  );
}
