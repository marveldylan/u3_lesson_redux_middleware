import {
  GetDepartmentProducts,
  GetDepartments
} from '../../services/DepartmentService'
import { GET_DEPARTMENTS, GET_DEPARTMENT_PRODUCTS } from '../types'

export const LoadDepartments = () => {
  return async (dispatch) => {
    try {
      const departments = await GetDepartments()
      dispatch({
        type: GET_DEPARTMENTS,
        payload: departments
      })
    } catch(error) {
      throw error
    }
  }
  

}

export const  LoadDepartmentProducts = () => {
  return async (dispatch) => {

    try {
      const products = await GetDepartmentProducts()
      dispatch({
        type: GET_DEPARTMENT_PRODUCTS,
        payload: products
      })
    } catch(error){
      throw error
    }
  }
}
