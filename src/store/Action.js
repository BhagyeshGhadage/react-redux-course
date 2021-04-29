import {ADD_TO_CART} from '../store/Constant'
import {REMOVE_TO_CART} from '../store/Constant'
import {connect} from 'react-redux'
import Course from './../components/Course'
export const addTocart = (data) => {
    console.log(data.id + " data")
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeTocart = (data) => {
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}

const mapStateToProps = state => ({
    totalCourse:state
})


const mapDispatchToProps = dispatch => ({
    addToCartHandler : data => dispatch(addTocart(data))
})

export default connect(mapStateToProps, mapDispatchToProps) 