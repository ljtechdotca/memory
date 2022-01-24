import Head from "next/head";

export interface MetaProps {}

export const Meta = ({}: MetaProps) => {
  return (
    <Head>
      <title>ljtech Memory</title>
      <meta name="description" content="Find 8 pairs of matching cards." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
