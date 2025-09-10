import { useParams } from "react-router-dom"

function Products() {
    const param = useParams()
    console.log(param);

    return (
        <h4>Products</h4>
    )
}

export default Products