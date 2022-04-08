import { useEffect } from "react"
// import { PropTypes } from "prop-types"
// import { connect } from "react-redux"
// import { fetchProducts } from "../../redux/actions/productsActions";
import { useSelector } from "react-redux";
import { Layout } from '../../layout/Layout'

const Home = (props) => {
  const state = useSelector(state => state)
  useEffect(() => {
    // props.fetchProducts();
    console.log('state', state)
  }, [])
  return (
    <>
      <Layout>
        <h1>Home</h1>
        {/* {props.products.map((el, index) => {
          return <li key={el.id} >{index}</li>
        })} */}
      </Layout>
    </>
  )
}

// HomeComponent.propTypes = {
//   fetchProducts: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired
// }

// export {Home}

// export default connect(null, { fetchPosts })(Home)
// const mapStateToProps = state => ({
//   products: state.products.items
// })

// const Home = connect(mapStateToProps, { fetchProducts })(HomeComponent)
export { Home }