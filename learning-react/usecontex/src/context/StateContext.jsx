import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

// PROVIDER FUNCTION
export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading,setLoading] = useState(true)

  // GET THE DATA WHEN MOUNTED
  useEffect(() => {
    fetchData();
  }, []);

  // ADD PRODUCTS TO INITIAL STATE FROM PRODUCT LIST FETCHING DATA FROM API
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: productList });
    const filterProduct = productList.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCT", payload: filterProduct });
  }, [productList, search]);

  // FETCHING DATA FROM FAKE STORE API
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setLoading(!loading);
    setProductList(data);
  };

  // INITIAL STATE OF PRODUCTS AND CART
  const initialState = {
    products: [],
    cart: [],
  };

  // REDUCER HOOK
  const [state, dispatch] = useReducer(reducer, initialState);

  // DATA PASSING TO THE CHILDREN
  const data = { state, dispatch, search, setSearch,loading,setLoading };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
