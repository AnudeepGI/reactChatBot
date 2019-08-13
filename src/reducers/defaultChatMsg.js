function defaultChatMsg(state = null, action) {
    switch (action.type) {
        case 'CHAT_UPDATE':
            return [...state, { source: action.payload.msgType, msg: action.payload.msg }];
            break;
    }
    return [
        { source: 'bot', msg: 'SimpleChat1' },
        { source: 'username', msg: 'SimpleChat2' },
        { source: 'bot', msg: 'SimpleChat3' }
    ];
}

export default defaultChatMsg;

