import { Footer, Header, Navbar, Trending, Desc, Services } from "@/components";

export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <Header />
        <Trending />
        <Desc />
        <Services />
        <Footer />
      </main>
    </>
  );
}
