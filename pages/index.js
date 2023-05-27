import Head from "next/head";
import NavBar from "@/components/NavBar"; 
import Hero from "@/components/Hero"; 


export default function Home() {

  return (

    <>

      <Head>
        <title>King James</title>
      </Head>

      <main>

        <NavBar />
        <Hero />

      </main>

    </>

  );

}
