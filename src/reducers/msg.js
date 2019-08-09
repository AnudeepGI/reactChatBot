let defaultMsg = [
    [
        {
            title: "BOT1111",
            msg: "11111Hi, welcome to SimpleChat! Go ahead and send me a message.😄"
        },
        {
            title: "22222BOT",
            msg: "22222Hi, welcome to SimpleChat! Go ahead and send me a message.😄"
        }
    ], [
        {
            title: "333333BOT",
            msg: "444444Hi, welcome to SimpleChat! Go ahead and send me a message.😄"
        },
        {
            title: "5555555BOT",
            msg: "555555Hi, welcome to SimpleChat! Go ahead and send me a message.😄"
        }
    ]
]


export default function (state = null, action) {
    switch (action.type) {
        case 'MSG_UPDATE':
            return action.payload
            break;
    }
    return defaultMsg
}