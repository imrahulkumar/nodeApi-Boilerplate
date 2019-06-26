const TWILIO_ACCOUNT_SID = 'ACb0f3ac42b84f49512bee2a3ac8d7d692';
const TWILIO_AUTH_TOKEN = 'b75187541b0411d6b10552729d786a23';
const sms = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const twilioPhone = '+17025087386',
    { msg } = require('../../config/message')

exports.sendSms = async (mobile, smsBody) => {
    try {
        let response = await sms.messages.create({
            body: smsBody,
            from: twilioPhone,
            to: mobile
        })
        if (response) {
            return {
                msg: msg.otpSent,
                sid: response.sid
            }
        }
    } catch (error) {
        throw error
    }
}