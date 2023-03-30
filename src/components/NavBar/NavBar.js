import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebook</button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )

}
export default NavBar