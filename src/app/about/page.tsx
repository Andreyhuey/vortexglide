import {
  Card,
  Footer,
  HeaderA,
  Navbar,
  Newsletter,
  Team,
  Work,
} from "@/components";

const index = () => {
  return (
    <>
      <head>
        <title>About Gaming</title>
      </head>
      <main>
        <Navbar />
        <HeaderA />
        <Work />
        <Card />
        <Team />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default index;
