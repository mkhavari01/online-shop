import { useSelector } from "react-redux";
import { fetchOrders } from "../../redux/actions/ordersAction";
import { Pagination } from "../../components/Pagination";
import { TableGrid } from "../../components/TableGrid";

const Orders = (props) => {
  const state = useSelector(state => state);
  console.log('state',state)
  return (
    <section className="container mt-4" >
      <TableGrid page="orders" headers={['', 'زمان ثبت سفارش', 'مجموع مبلغ', 'نام کاربر']} state={state.orders} bodyItems={[ "createdAt", "cost", "name"]} />
      <Pagination actionFunc={fetchOrders(1, 4)} pageNumbers={1} pageLimitation={1} />
    </section>
  )
}

export { Orders }