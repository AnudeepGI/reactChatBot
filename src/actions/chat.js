function chat(msgType, msg) {
    return {
        type: "CHAT_UPDATE",
        payload: { 'msgType': msgType, 'msg': msg }
    }
}

export default chat;