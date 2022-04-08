import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import Button from '@mui/material/Button';

const Products = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts(1, 3))
    console.log('state', state);
  }, [])

  return (
    <>
      <section className="container mt-4" >
        <table className="table vazir-thin ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">دسته بندی</th>
              <th scope="col">نام کالا</th>
              <th scope="col">تصویر</th>
            </tr>
          </thead>
          <tbody>
            {state.products.allProducts.map((el) => {
              return (
                <tr key={el.id} >
                  <th scope="col">
                    <Button variant="text">
                      <span className="vazir-medium" >
                        حذف
                      </span>
                    </Button>
                    <Button variant="text">
                      <span className="vazir-medium" >
                        ویرایش
                      </span>
                    </Button>
                  </th>
                  <th scope="col">{el.headgroup}/{el.group}</th>
                  <th scope="col">{el.name}</th>
                  <th scope="col">تصویر</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}

export { Products }