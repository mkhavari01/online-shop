import { useEffect } from "react"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { fetchPosts } from "../../redux/actions/postActions"

const HomeComponent = (props) => {
  useEffect(()=>{
    props.fetchPosts();
  },[])
  return (
    <>
      <h1>Home</h1>
      {props.posts.map((el,index)=>{
        return <li key={el.id} >{index}</li>
      })}
    </>
  )
}

HomeComponent.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

// export {Home}

// export default connect(null, { fetchPosts })(Home)
const mapStateToProps = state => ({
  posts : state.posts.items
})

const Home = connect(mapStateToProps, { fetchPosts })(HomeComponent)
export { Home }