import Header from "../../components/eng/Header";
export default function EnglishLayout({ children }) {
  return (
    <>
    <Header/>
      <main>{children}</main>
    </>
  );
}