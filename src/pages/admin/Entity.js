import { useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { Pagination } from "../../components/Pagination";
import { TableGrid } from "../../components/TableGrid";

const Entity = (props) => {
  const state = useSelector(state => state)
  return (
    <section className="container mt-4" >
      <TableGrid headers={["", 'موجودی', 'قیمت', 'نام کالا']} state={state.products} bodyItems={["quantity", "price", "name", ""]} />
      <Pagination actionFunc={fetchProducts(1, 4)} pageNumbers={3} pageLimitation={3} />
    </section>
  )
}

export { Entity }