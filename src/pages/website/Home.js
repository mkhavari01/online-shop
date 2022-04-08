import { useEffect } from "react"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { fetchCategory } from "../../redux/actions/categoryActions"

const HomeComponent = (props) => {
  useEffect(()=>{
    props.fetchCategory();
  },[])
  return (
    <>
      <h1>Home</h1>
      {props.categories.map((el,index)=>{
        return <li key={el.id} >{index}</li>
      })}
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
  categories : state.categories.items
})

const Home = connect(mapStateToProps, { fetchCategory })(HomeComponent)
export { Home }