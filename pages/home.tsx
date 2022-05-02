import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>

      <motion.h1 animate={{}}>Home</motion.h1>
    </div>
  );
}
