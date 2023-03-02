import Mars from '../assets/projects/mars_traversal.png'
import QA from '../assets/projects/qa.png'
import MonteCarlo from '../assets/projects/montecarlo.png'
import VehicleRouting from '../assets/projects/tsp.png'


export const data=[
    {
        id:1,
        name:"Question Answering AI",
        description:"A text and question are provided, by implementing a deep learning transformers architecture, the model will extract the answer from the aforementioned text.",
        image:QA,

        github:"https://github.com/gziz/question-answer-ai",
        demo:"https://questionanswer.gerardomz.com/",
    },
    {
        id:2,
        name:"Vehicle Routing Optimization",
        description:"Optimize traveling distance for profit maximization given user selected locations (Altered Nearest Neighbor Heuristic).",
        image:VehicleRouting,
        github:"https://github.com/gziz/tsp-front",
        demo:"",
    },
    {
        id:3,
        name:"Monte Carlo Ruin Simulation",
        description:"Analyzed historical insurance data and performed goodness-of-fit tests to obtain random variable parameters.",
        image:MonteCarlo,
        github:"https://github.com/gziz/cl-ruin-simulation",
        demo:"https://gziz-cl-ruin-simulation-appmain-04h648.streamlitapp.com/",
    },
    {
        id:4,
        name:"Mars Search Algorithms",
        description:"Evaluate the performance of multiple search algorithms in a Mars simulated environment.",
        image:Mars,
        github:"https://github.com/gziz/mars-routes",
        demo:"",
    },


]