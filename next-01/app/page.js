import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-500 justify-center bg-cyan-700 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center space-y-20 py-20 px-16  sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Olá, turma de programação
          </h1>
        </div>
      </main>
    </div>
  );
}
