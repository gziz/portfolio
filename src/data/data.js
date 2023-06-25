import Mars from '../assets/projects/mars_traversal.png'
import QA from '../assets/projects/qa.png'
import Quetzal from '../assets/projects/quetzal.gif'
import MonteCarlo from '../assets/projects/montecarlo.png'
import CryptoIoT from '../assets/projects/crypto-iot.png'
import VehicleRouting from '../assets/projects/tsp.png'
import metaLogo from '../assets/metaLogo.png'

export const data=[
    {
        name:"Virtual Assistant Language Model",
        description:"AI assistant powered by Chat-GPT model with document retrieval (custom knowledge base). Access through a telegram bot.",
        image:Quetzal,
        technologies: [
            { name: 'React', icon: metaLogo },
            { name: 'Tailwind', icon: metaLogo },
            // more technologies...
          ],
        github:"https://github.com/gziz/llm-chatbot-for-banking",
        demo:""
    },
    {
      name:"IoT API with Crypto Algorithms",
      description:"IoT API with mutual authentication and cryptographic algorithms for signature validation from scratch (ECDSA).",
      image:CryptoIoT,
      technologies: [
          { name: 'React', icon: metaLogo },
          { name: 'Tailwind', icon: metaLogo },
          // more technologies...
        ],
      github:"https://github.com/gziz/iot-crypto",
      demo:""
  },
  {
      name:"Question Answering AI",
      description:"A text and question are provided, by implementing a deep learning transformers architecture, the model will extract the answer from the aforementioned text.",
      image:QA,
      technologies: [
          { name: 'React', icon: metaLogo },
          { name: 'Tailwind', icon: metaLogo },
          // more technologies...
        ],
      github:"https://github.com/gziz/question-answer-ai",
      demo:"https://questionanswer.gerardomz.com/",
  },
    {
        name:"Vehicle Routing Optimization",
        description:"Optimize traveling distance for profit maximization given user selected locations (Altered Nearest Neighbor Heuristic).",
        image:VehicleRouting,
        technologies: [
            { name: 'React', icon: metaLogo },
            { name: 'Tailwind', icon: metaLogo },
            // more technologies...
          ],
        github:"https://github.com/gziz/tsp-front",
        demo:"",
    },
    {
        name:"Monte Carlo Ruin Simulation",
        description:"Analyzed historical insurance data and performed goodness-of-fit tests to obtain random variable parameters.",
        image:MonteCarlo,
        technologies: [
            { name: 'React', icon: metaLogo },
            { name: 'Tailwind', icon: metaLogo },
            // more technologies...
          ],
        github:"https://github.com/gziz/cl-ruin-simulation",
        demo:"https://gziz-cl-ruin-simulation-appmain-04h648.streamlitapp.com/",
    },
    {
        name:"Mars Search Algorithms",
        description:"Evaluate the performance of multiple search algorithms in a Mars simulated environment.",
        image:Mars,
        technologies: [
            { name: 'React', icon: metaLogo },
            { name: 'Tailwind', icon: metaLogo },
            // more technologies...
          ],
        github:"https://github.com/gziz/mars-routes",
        demo:"",
    },


]