import Image from "next/image";

const ChatCard = () => {
    return (
        <div className="flex flex-row h-20 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-50">
            <div className="px-3 pt-3">
                <Image src="/avatar.png" height="50" width="50" className="rounded-full" />
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-lg pt-2">User</span>
                <div className="flex-flex-row jus">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <small className="text-xs ml-28">7:39 PM</small>
                </div>
            </div>
        </div>
    )
}

export default ChatCard
