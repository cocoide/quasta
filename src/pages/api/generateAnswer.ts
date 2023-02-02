import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { withAuthentication } from '../../libs/middlewares/with-authentication';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body),
    temperature: 0.6,
    max_tokens: 100,
    stop: "\n",
  });
  res.status(200).json({ result: completion.data.choices[0].text! });
}

function generatePrompt(question:string) {

  return `Answer the question.
Question: Explain quantum computing in simple terms
Answer: Quantum computing is a type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data.
Question: How do I make an HTTP request in Javascript?
Answer: To make an HTTP request in JavaScript, you can use the XMLHttpRequest object or the more modern fetch() function.
Question: ${question}
Answer:`;
}

export default withAuthentication(handler)