import Image from 'next/image'
import ChatCard from '@components/ChatCard'
import {MdSend} from 'react-icons/md'

const chat = () => {
    return(
        <div className="text-black flex flex-row bg-white">
            <div className="flex flex-col w-4/12 border-r-2 border-gray-300">
                <div className="flex flex-row h-20 bg-gray-100">
                    <div className="my-auto mx-2">
                        <Image src="/avatar.png" height="40" width="40" className="rounded-full" />
                    </div>
                    <span className="text-lg font-semibold my-auto">Swarnendu</span>
                </div>
                <div className="flex flex-col screen-height overflow-y-auto">
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                </div>
            </div>
            <div className="flex flex-col w-8/12 z-10">
                <div className="flex flex-row bg-gray-100 h-20">
                    <div className="my-auto mx-2">
                        <Image src="/avatar.png" height="40" width="40" className="rounded-full" />
                    </div>
                    <span className="text-lg font-semibold my-auto">User</span>
                </div>
                <div className="flex flex-col bg-blue-100 chat-window-height">

                </div>
                <div className="flex flex-row px-5 py-3 bg-gray-100">
                    <textarea cols={100} rows={2} placeholder="Write a message" className="rounded-full outline-none pl-4 resize-none" />
                    <span className="my-auto mx-4 rounded-full bg-blue-400 p-1 cursor-pointer">
                        <MdSend size="1.6em" className="text-white" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default chat;