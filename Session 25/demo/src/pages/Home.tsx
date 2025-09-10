import { useSearchParams } from "react-router-dom"
import UserLayout from "../layouts/UserLayout";

function Home() {
    const [searchParam] = useSearchParams()
    console.log(searchParam.get("id"));

    return (
        <UserLayout>
            {/* <Header></Header> */}
            <h4>Nội dung trang home</h4>
            {/* <Footer></Footer> */}
        </UserLayout>
    )
}

export default Home