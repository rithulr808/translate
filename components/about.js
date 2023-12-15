import 'tailwindcss/tailwind.css'
import * as React from "react";
import {useState} from "react";

export  default function About() {
    const [message, setMessage] = useState('');
    const [prompt, setPrompt] = useState('');


    const questions = [
        {
            id: 'question-1',
            text: 'What is the primary objective of NASA\'s Global Precipitation Measurement (GPM) mission?',
            options: [
                { id: 'value-1-1', text: 'Monitoring sea-level rise' },
                { id: 'value-1-2', text: 'Studying the Moon\'s surface composition' },
                { id: 'value-1-3', text: 'Improving global precipitation measurements', correct: true },
            ],
        },
        {
            id: 'question-2',
            text: 'Which space agency collaborates with NASA on the GPM mission?',
            options: [
                { id: 'value-2-1', text: 'ESA (European Space Agency)' },
                { id: 'value-2-2', text: 'JAXA (Japan Aerospace Exploration Agency)\n', correct: true },
                { id: 'value-2-3', text: 'CNSA (China National Space Administration)' },
            ],
        },
        {
            id: 'question-3',
            text: 'In the context of NASA\'s Earth science missions, what does the acronym GPM stand for?',
            options: [
                { id: 'value-3-1', text: 'Global Polar Magnetosphere' },
                { id: 'value-3-2', text: 'Greenhouse Gas Pollution Monitoring' },
                { id: 'value-3-3', text: 'Global Precipitation Measurement', correct: true },
            ],
        },
    ];



    const typing = message.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: index * 0.03 + 's' }}>{char}</span>
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!message) return;
        // { user && updateFireMessage(message, user).then(() => getMessages(user).then(msg => setHistoryMsg(msg))); }
        // addBlobMessage(message);
        setMessage(prompt);
    }


    const handleMessageChange = (e) => {
        setPrompt(e.target.value)
    };


    return (
        <div className="h-full flex flex-col">
            <div className="px-8  border-t border-t-gray-300 min-h-full border-r  flex-grow">
                <div className="container  mx-auto min-h-full py-32 flex lg:flex-row flex-col  gap-4 p-4  ">
                    <div className="w-full h-fit rounded-xl bg-gray-200">
                        <div className="flex-initial px-4  text-xl py-4 font-bold">
                            from
                        </div>
                        <form className="w-full h-full  flex flex-col items-center justify-between gap-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="w-full h-full outline-none py-2 bg-transparent px-4 text-md "
                                placeholder="Post your question here"
                                value={prompt}
                                onChange={handleMessageChange}
                            />
                            <button type="submit" className="text-lg px-12 rounded-xl text-white bg-gradient-to-b from-indigo-500 via-indigo-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  py-2 text-center mr-2 mb-2 ">
                                Submit
                            </button>
                        </form>
                        <div className="flex-auto  h-full rounded-md text-center p-2 mx-2">
                            <p className="text-black  h-full">
                           </p>
                        </div>
                    </div>
                    <div className="w-full min-h-full  rounded-xl border-slate-200 border " >
                        <div className="flex-initial px-4  text-xl py-4 font-bold">
                            to
                        </div>
                        <div>
                            <div className="typewriter px-4">
                                {typing}
                            </div>
                            {/*{*/}
                            {/*    message? message : " "*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}