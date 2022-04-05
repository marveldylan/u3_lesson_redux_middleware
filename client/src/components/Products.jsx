import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadDepartmentProducts } from '../store/actions/DepartmentActions'

const mapStateToProps = ({ productState }) => {
    return { productState }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => dispatch(LoadDepartmentProducts())
    }
  }

const Products = (props) => {


    useEffect(()=> {
        props.fetchProducts()
    }, [])

    return (

    )
}

export default Products