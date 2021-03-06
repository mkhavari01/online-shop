import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const TableGrid = (props) => {
  const { headers, bodyItems, state, page } = props;
  return (
    <table className="table vazir-thin ">
      <thead>
        <tr>
          {headers.map((el) => {
            return (
              <th key={el} scope="col">
                {el}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {state.map((el) => {
          return (
            <tr key={el.id}>
              {page == "orders" ? (
                <th scope="col">
                  <Button variant="text">
                    <span className="vazir-medium">بررسی سفارش</span>
                  </Button>{" "}
                </th>
              ) : (
                <th scope="col">
                  <Button variant="text">
                    <span className="vazir-medium">حذف</span>
                  </Button>
                  <Button variant="text">
                    <span className="vazir-medium">ویرایش</span>
                  </Button>
                </th>
              )}
              {bodyItems.map((el2) => {
                return el2 == "image" ? (
                  <th key={el2} scope="col">
                    <Avatar
                      alt="N/A"
                      src={`${process.env.REACT_APP_BACKEND_URL + el[el2]}`}
                      // sx={{ width: 56, height: 56 }}
                    />
                  </th>
                ) : (
                  <th key={el2} scope="col">
                    {el[el2]}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TableGrid };
