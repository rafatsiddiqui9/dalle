const { Configuration, OpenAIApi } = require("openai");

function ChatGPT(apiKey) {
	const configuration = new Configuration({
  apiKey: apiKey,
});
 this.openai = new OpenAIApi(configuration);
}

ChatGPT.prototype.ask = async function (request) {
  try {
    const response = await this.openai.createImage({
      // model: 'gpt-3.5-turbo' ,
      // messages: [{"role": "system", "content": request}],
      // max_tokens: 500,
      // temperature: 1,
      // stream: false,
      prompt: request, // corrected shorthand property initializer
      n: 1, // corrected shorthand property initializer
      size: "1024x1024" // corrected shorthand property initializer
    });

    console.log(
      'Choices: ', response.data.data[0].url // corrected variable name
    );
    return response.data.data[0].url;
  } catch (err) {
    console.log('ChatGPT error: ' + err);
    return err;
  }
};


module.exports = ChatGPT;
