import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Headerimage from "../components/Headerimage/Headerimage";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Headerimage></Headerimage>
        <Footer></Footer>
      </div>
    </>
  );
}
