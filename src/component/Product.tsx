import { useParams } from "react-router";
import products from "../products"

interface RouteParams {
    id: string;
}

export default function Product() {
    const { id } = useParams<RouteParams>();
    const product = products.find(p => p.id === id)
    if (!product) {
        return (
            <div>Product not found</div>
        )
    }
    return (
        <>
            <button>close</button>
            <div>
                {product.photoUrl.map((photo) => <img src={photo.url} alt={photo.altText} />)}
                {product.title}
                {product.description}
                {product.price}
            </div>
        </>
    )
}

