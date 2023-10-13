import Cards from "../Card/Cards";
import Navbars from "../Navbar/Navbars";
import Products from "../Product/Products";

const Display = (props) => {
  return (
    <div onClick={props.onAdd}>
      <Cards />
      <Products />
    </div>
  );
};

export default Display;
