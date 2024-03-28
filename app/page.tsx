import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="bg-white p-3 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md flex flex-col justify-center">
        <h1 className="heading">Welcome to Quizy</h1>
        <Separator />
        <div className="flex flex-col justify-center">
          <QuizSettings />
        </div>
      </div>
    </main>
  );
}
