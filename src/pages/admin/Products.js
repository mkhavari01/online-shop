import { useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { Pagination } from "../../components/Pagination";
import { TableGrid } from "../../components/TableGrid";
import Button from '@mui/material/Button';


const Products = (props) => {
  const state = useSelector(state => state)
  return (
    <>
      <section className="container mt-4" >
        <div className="d-flex align-items-center justify-content-between">
          <Button variant="contained" className="mb-4" color="success">
            <span className=" vazir-medium" >
              افزودن کالا 
            </span>
          </Button>
          <h1 className="h1 vazir-bold text-end mb-5 text-primary p-2 rounded px-4">
            مدیریت کالاها
          </h1>
        </div>
        <TableGrid headers={["",'گروه','دسته بندی','نام کالا','تصویر']} state={state.products} bodyItems={["group","headgroup","name",""]} />
        <Pagination actionFunc={fetchProducts(1, 3)} pageNumbers={3} pageLimitation={3} />
      </section>
    </>
  )
}

export { Products }