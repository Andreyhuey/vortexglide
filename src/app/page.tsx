import {
  Footer,
  Header,
  Navbar,
  Trending,
  Desc,
  Services,
  Projects,
} from "@/components";

export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <Header />
        <Trending />
        <Desc />
        <Services />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
