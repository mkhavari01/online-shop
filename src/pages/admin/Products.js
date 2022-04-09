import { useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { Pagination } from "../../components/Pagination";
import { TableGrid } from "../../components/TableGrid";

const Products = (props) => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <>
      <section className="container mt-4" >
        <TableGrid headers={["",'گروه','دسته بندی','نام کالا','تصویر']} state={state.products} bodyItems={["group","headgroup","name",""]} />
        <Pagination actionFunc={fetchProducts(1, 4)} pageNumbers={3} pageLimitation={3} />
      </section>
    </>
  )
}

export { Products }