import { useLoaderData } from "react-router-dom";
import Accordion from "../components/home/Accordion";
import Banners from "../components/home/Banners";
import Products from "../components/home/Products";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banners />
      <Products data={data} />
      <Accordion />
    </div>
  );
};

export default Home;
