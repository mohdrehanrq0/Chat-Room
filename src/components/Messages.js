import React, { useContext } from "react";
import Input from "./Input";
import { ContextProvider } from '../context/ContextProvider'

function Messages() {
    const {allmsg, user} = useContext(ContextProvider);

  return (
    <div className="messages">

        <>{allmsg.map((messages) => messages.email === user.email ? (<div className="messages__my" key={messages.id}>
            <div className="messages__my-p"><p>{messages.msg}</p></div>
        </div>) : (<div className="messages__other" key={messages.id}>
            <div className="messages__other-img">
                <img src={messages.photo} alt="other_user_img" />
            </div>
            <div className="messages__other-msg">
                <span>{messages.username}</span>
                <p>{messages.msg}</p>
            </div>
        </div>) )}</>


        {/* <div className="messages__other">   
            <div className="messages__other-img">
                <img src="/logo192.png" alt="other_user_img" />
            </div>
            <div className="messages__other-msg">
                <span>Rehan</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam provident, quo voluptatem dolorum consequatur cupiditate, amet tempora modi nesciunt facere quia porro ipsa error nulla corporis suscipit impedit fuga.</p>
            </div>
        </div>
        <div className="messages__my">
            <div className="messages__my-p"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, beatae omnis architecto consequatur numquam voluptas expedita. Aliquid deserunt, eveniet maxime voluptates voluptatum consectetur quidem, accusantium repellat ratione, impedit totam provident.</p></div>
        </div> */}
      <Input />
    </div>
  );
}

export default Messages;
