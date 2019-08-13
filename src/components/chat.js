import React from 'react';
import ChatHeader from './chatHeader'
import ChatFooter from './chatFooter';

import ChatBody from './chatBody';

function Chat() {
    return (
        <section className="msger">
            <ChatHeader />
            <main className="msger-chat">
                <ChatBody />
            </main>
            <ChatFooter />
        </section>
    )
}

export default Chat;