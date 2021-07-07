import Image from 'next/image'
import ChatCard from '@components/ChatCard'
import {MdSend} from 'react-icons/md'
import MessageBox from '@components/MessageBox'
import { Client, Versions } from '@stomp/stompjs'
import { useState } from 'react'
import {Message} from '@libs/types'

const chat = () => {

    Object.assign(global, { WebSocket: require('websocket').w3cwebsocket });

    const [message, setMessage] = useState("")
    const [data, setData] = useState<Message[]>([{text: "hello1", type: "send"}, {text: "hello2", type: "receive"}])
    let connection_configuration = {
        brokerURL: 'ws://192.168.0.101:2198/chat',
        stompVersions : new Versions(['1.1', '1.2']),
        reconnectDelay : 500,
        connectionTimeout : 1000,
        heartbeatIncomming : 4000,
        heartbeatOutgoing : 4000,
        connectHeaders : {
            login : 'myuser',
            passcode : 'mypassword'
        },
        maxWebSocketChunkSize : 8*1024,
        splitLargeFrames : true,
    }
    const [stompClient] = useState(new Client(connection_configuration)) 
    function initClient(){
        stompClient.onConnect = function(frame){
            console.log("Connection Established");
            let subscription = stompClient.subscribe('/topic/random_topic', (msg) => {
                console.log(`Message received ${msg.body} with headers ${msg.headers["destination"]}`);
                const newData = data.concat({text: msg.body, type: 'receive'})
                setData(newData)
                console.log(data);
                // setData([...data,{text: msg.body, type: 'receive'}])
                },
                {
                    "id": String((Math.floor(Math.random()*100))),
                    "durable": "true",
                    "auto-delete": "false"
                }
            )
            console.log(`New subscription created with id ${subscription.id}`);        
        }
        stompClient.onStompError = function(frame){
            console.log("an stomp specific error occured");
        }
        stompClient.onDisconnect = function(frame){
            console.log("stop disconnect frame received");
        }
        stompClient.onWebSocketClose = function(close_event){
            console.log(`underlying websocket connection closed with code ${close_event.code} and reason ${close_event.reason} and its clean status is ${close_event.wasClean}`);
        }
        stompClient.onWebSocketError = function(event) {
            console.log("an error occured in the underlying websocket");
        }
        stompClient.activate()
    }
    const sendMessageHandler = () => {
        if(message){
            let receiptId = String(Math.floor(Math.random()*100))
            stompClient.publish({
                destination: "/app/random_topic",
                body: message,
                headers: {
                    receipt: receiptId
                }
            })
            console.log('Message published '+message)
            const newData = data.concat({text: message, type: 'send'})
            setData(newData)
            setTimeout(() => {
                console.log(data);
            }, 2000); 
            
            setMessage('')
        }
    }
    
    return(
        <div className="text-black flex flex-row bg-white" onLoad={initClient}>
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
                <div className="flex flex-col justify-end p-4 chat-window-height overflow-y-auto bg-blue-100">
                    {data ? data.map(message => (
                        <MessageBox message={message} key={Math.floor(Math.random()*100)+1} />
                    )) : null}
                </div>
                <div className="flex flex-row px-5 py-3 bg-gray-100">
                    <textarea cols={100} rows={2} value={message} onChange={(event)=>{setMessage(event.target.value)}} placeholder="Write a message" className="rounded-full outline-none pl-4 resize-none" />
                    <span onClick={sendMessageHandler} className="my-auto mx-4 rounded-full bg-blue-400 p-1 cursor-pointer">
                        <MdSend size="1.6em" className="text-white" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default chat;