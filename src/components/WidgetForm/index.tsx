import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outros',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

// 4 - criação de um type do Typescript com os tipos de feedback possíveis (BUG, IDE, OTHER) 
//utilizando a anotação keyof e converter o FeedbackType no tipo de chave do objeto const feedbackTypes 
//para o tipo feedbackTypes com typeof (BUG, IDEA ou OTHER)
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    // 2 - Criação de um estado para anotar o tipo de feedback escolhido
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                 <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )}
            
            <footer className="text-xs text-neutral-400">
             Feito por <a className="underline underline-offset-2" href="https://github.com/DaviFarias7">Davi Farias</a>            
            </footer>
        </div>
    )
}