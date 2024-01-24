import Movies from "@/components/Movies";

export const metadata = {
  title: "MoviesApp",
  description: "movies app",
};

export default function Home() {
  return <main className="">
    <Movies />
  </main>;
}
