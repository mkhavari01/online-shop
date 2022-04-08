import { useEffect } from "react"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { fetchProducts } from "../../redux/actions/productsActions";
import { useSelector } from "react-redux";
import { Layout } from '../../layout/Layout'

const HomeComponent = (props) => {
  const state = useSelector(state => state)
  useEffect(() => {
    props.fetchCategory();
    console.log('state', state)
  }, [])
  return (
    <>
      <Layout>
        <h1>Home</h1>
        {props.categories.map((el, index) => {
          return <li key={el.id} >{index}</li>
        })}
      </Layout>
    </>
  )
}

HomeComponent.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

// export {Home}

// export default connect(null, { fetchPosts })(Home)
const mapStateToProps = state => ({
  categories: state.categories.items
})

const Home = connect(mapStateToProps, { fetchProducts })(HomeComponent)
export { Home }