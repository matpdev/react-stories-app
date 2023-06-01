import Stories from "@/components/stories";
import { Header } from "@morpheus/morphine";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex items-center h-screen justify-center bg-slate-700">
      <Stories></Stories>
    </div>
  );
}
