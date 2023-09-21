import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { PlanAndExecuteAgentExecutor } from "langchain/experimental/plan_and_execute";
import { exec } from "child_process";

// export OPENAI_API_KEY=<>
// export SERPAPI_API_KEY=<>
// Replace with your API keys!

// Chain = pre-defined --- 1.research => API call. 2. sumarize search
// Agent = task + tools + template => it figures out what to do

//CHAIN TEMPLATE

// to run, go to terminal and enter: cd playground
// then enter: node quickstart.mjs
const template =
  "You are director of social media with 30 years of experience. Please give me some ideas for content I should write regarding {topic}? The content is for {socialplatform}. Translate to {language}.";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["topic", "socialplatform", "language"]
});

//const formattedPromptTemplate = await prompt.format({
//  topic: "artificial inteligence",
//  socialplatform: "twitter",
//  language: "portuguese"
//});

//console.log(formattedPromptTemplate);

const model = new OpenAI({ temperature: 0.9 });

const chain = new LLMChain({ prompt: prompt, llm: model });

//const resChain = await chain.call({
//  topic: "artificial inteligence",
//  socialplatform: "twitter",
//  language: "portuguese"
//});

//console.log({ resChain });

//AGENT TEMPLATE

//const agentModel= new OpenAI({
//    temperature: 0,
//    modelName: "gpt-3.5-turbo",
//})
//
//const tools = [
//    new SerpAPI(process.env.SERPAPI_API_KEY, {
//    location: "São Caetano do Sul city, São Paulo state, Brazil",
//    hl: "pt",
//    gl: "br"}),
//    new Calculator(),
//]
//
//const executor = await initializeAgentExecutorWithOptions(tools, agentModel, {
//    agentType: "chat-zero-shot-react-description",
//    verbose: true,
//    maxIterations: 5,
//})
//
//const input = "best restaurant of the city?"
//
//const result = await executor.call({input})
//
//console.log({result})

/*
PLAN AND ACT AGENT

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: "São Caetano do Sul, São Paulo, Brazil",
    hl: "pt",
    gl: "br"
  }),
  new Calculator()
];

const chatModel = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo", verbose: true });

const executor = PlanAndExecuteAgentExecutor.fromLLMAndTools({llm: chatModel,tools})

//We dont tell it HOW to do it. We just tell what to do
const result = await executor.call({
    input: "Who is the current president of the United States? What is their current age raised to the second power?"
})

console.log(result);*/

//MEMORY
const llm = new OpenAI({})
const memory = new BufferMemory();
const conversationChain = new ConversationChain({llm:llm, memory: memory});

const res1 = await conversationChain.call({
    input: "meu nome é Lebron James o jogador de basquete"
})

console.log(res1);

const res2 = await conversationChain.call({
    input: "Sim, sou eu mesmo"
})

console.log(res2);
