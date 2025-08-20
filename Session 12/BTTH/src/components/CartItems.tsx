import { Component } from 'react'

export default class CartItems extends Component {
    render() {
        const carts = [
            {
                id: 1,
                productName: "Iphone 11 pro",
                image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
                price: 900,
                quantity: 2,
                description: "256GB, Navy Blue"
            },
            {
                id: 2,
                productName: "Samsung galaxy Note 10",
                image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp ",
                price: 900,
                quantity: 2,
                description: "256GB, Navy Blue"
            },
            {
                id: 3,
                productName: "Canon EOS M50",
                image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp ",
                price: 1199,
                quantity: 1,
                description: "Onyx Black"
            },
            {
                id: 4,
                productName: "MacBook Pro",
                image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp ",
                price: 1799,
                quantity: 1,
                description: "1TB, Graphite"
            }
        ];
        return (
            <>
                {carts.map((item) => {
                    return <div key={item.id} className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div>
                                        <img
                                            src={item.image}
                                            className="img-fluid rounded-3"
                                            alt="Shopping item"
                                            style={{ width: 65 }}
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <h5>{item.productName}</h5>
                                        <p className="small mb-0">{item.description}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: 50 }}>
                                        <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                    </div>
                                    <div style={{ width: 80 }}>
                                        <h5 className="mb-0">${item.price}</h5>
                                    </div>
                                    <a href="#!" style={{ color: "#cecece" }}>
                                        <i className="fas fa-trash-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </>
        )
    }
}