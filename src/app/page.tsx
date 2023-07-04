import { Footer, Header, Navbar, Trending, Desc } from "@/components";

export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <Header />
        <Trending />
        <Desc />
        <Footer />
      </main>
    </>
  );
}
