import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import Button from '@mui/material/Button';

const Products = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [pages, setPages] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimitation, setPageLimitation] = useState(3);


  useEffect(() => {
    dispatch(fetchProducts(1, pageLimitation))
  }, []);

  function paginationHandler(pageNumber) {
    dispatch(fetchProducts(pageNumber, pageLimitation));
    setCurrentPage(pageNumber)
  }

  function previousPageHandler() {
    dispatch(fetchProducts(currentPage - 1, pageLimitation))
    setCurrentPage(currentPage - 1)
  }

  function nextPageHandler() {
    dispatch(fetchProducts(currentPage + 1, pageLimitation))
    setCurrentPage(currentPage + 1)
  }

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
        <nav aria-label="Page navigation example">
          <ul className="justify-content-center m-0 pagination vazir-light">
            <li className={`page-item ${currentPage > 1 ? "" : "disabled "}`}>
              {currentPage > 1 ? <span className="page-link cursur-pointer" onClick={previousPageHandler} >قبل</span> :
                <span className="page-link cursur-defualt ">قبل</span>
              }
            </li>
            {new Array(pages).fill(0).map(function (el, index) {
              return (
                <li key={index} className="cursur-pointer page-item" onClick={() => paginationHandler(index + 1)} >
                  <span className={`page-link ${currentPage == index+1 ? "bg-primary text-white" : ""}`} >{index + 1}</span>
                </li>
              )
            })}
            <li className={`page-item ${currentPage == pages ? "disabled" : ""}`}>
              {currentPage == pages ? <span className="page-link cursur-defualt" >بعد</span> :
                <span className="page-link cursur-pointer " onClick={nextPageHandler} >بعد</span>
              }
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export { Products }