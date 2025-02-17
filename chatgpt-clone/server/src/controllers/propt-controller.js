const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openia")

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try{
            const response = await openaiAPI.createCompleation(
                openai.textCompletion(inputModel)
            )
            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        }
        catch(erro){
            return res,status(400).json({
            sucess: false,
            error: error.response ? error.response.data : "there was an inssue on the server"
        })
        }
    }
}