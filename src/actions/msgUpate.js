function msgUpdate(reqMsg, resMsg) {
    console.log("###########");
    console.log(reqMsg, resMsg);
    console.log("###########");


    let defaultMsgnNew = [
        [
            {
                title: "defaultMsgnNew11111",
                msg: reqMsg
            },
            {
                title: "BOT1111",
                msg: resMsg
            }
        ],
        [
            {
                title: "defaultMsgnNew22222",
                msg: reqMsg
            },
            {
                title: "BOT22222",
                msg: resMsg
            }
        ]
    ]
    return {
        type: "MSG_UPDATE",
        payload: defaultMsgnNew
    }
}

export default msgUpdate;