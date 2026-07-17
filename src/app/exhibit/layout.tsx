import Script from "next/script";

export default function ExhibitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
