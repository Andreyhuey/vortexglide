import {
  Footer,
  Header,
  Navbar,
  Trending,
  Desc,
  Services,
  Projects,
  Newsletter,
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
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
