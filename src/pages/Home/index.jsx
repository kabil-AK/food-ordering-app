
import { Banner }   from "../../components/Banner";
import { About } from "../../components/About";
import {ProductPreview} from "../../components/ProductPreview"

export const Home = () => {
  return (
    <>
      <Banner />
      <ProductPreview/>
      <About />
    </>
  );
}

export default Home;