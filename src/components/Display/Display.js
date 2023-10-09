import Cards from "../Card/Cards";
import Navbars from "../Navbar/Navbars";
import Products from "../Product/Products";

const Display = (props) => {
  return (
    <>
      <Navbars onClick={props.onAdd}/>
      <Cards />
      <Products />
    </>
  );
};

export default Display;
