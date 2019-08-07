import React from 'react';
import ChatHeader from './chatHeader'
import ChatFooter from './chatFooter';
import BotResponse from './botResponse';
import ClientResponse from './clientResponse';

function Chat() {
    return (
        <section className="msger">
            <ChatHeader />
            <main className="msger-chat">
                <BotResponse />
                <ClientResponse />
            </main>
            <ChatFooter />
        </section>
    )
}

export default Chat;