import { log } from 'console';
import React from 'react'

interface QuestionsProps {
  allQuestionsData: any[] | any;
}
interface IQuestion {
  id: number;
  name: string;
}

interface IQuestionProp {
  question: IQuestion;
  key: string;
}
 
const Quiz = ({ allQuestionsData }: QuestionsProps) => {

  //////////////////////////////////////////////////
  const questions : IQuestion[] = allQuestionsData;
  const Question: React.FC<{ card: IQuestion }> = ({ card }) => {
    return <div>{card.name}</div>;
  };
  const renderQuestions = () => {  
    return questions.map(item => {
      return <Question key={item.id} card={item} />;
    });
  };
  //////////////////////////////////////////////////
 
  return (
    <div>
      <div>Quiz</div>
       <ul>{renderQuestions()}</ul>
     </div>
  )
}
export default Quiz