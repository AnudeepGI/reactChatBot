let defaultMsg = [];
export default function (state = null, action) {
    switch (action.type) {
        case 'MSG_UPDATE':
            return action.payload
            break;
        case 'CLIENT_MSG':
            return action.payload
            break;
        case 'BOT_MSG':
            return Object.assign(state, action.payload);
            break;
    }
    return defaultMsg
}