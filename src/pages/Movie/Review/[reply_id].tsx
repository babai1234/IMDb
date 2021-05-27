import Reviews from "@components/Reviews"
import {useRouter} from "next/router"

const Reply = () => {
    const router = useRouter();
    console.log(router.pathname)
    return (
        <div className="bg-black h-full flex flex-col justify-between">
            <div className="m-auto w-8/12">
                <Reviews />
            </div>
            <div className="flex flex-col m-auto pl-14 w-8/12">
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
            </div>
        </div>
    );
}
 
export default Reply;