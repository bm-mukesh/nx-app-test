import React, {useEffect, useState} from 'react';
import { getComments } from '../redux/actionCreators/getComment';
import { getQuestions } from '../redux/actionCreators/getQuestions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSeector';
import Quiz from '../components/Quiz';
 
function App() {
  const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const [questionsData, setQuestionsData] = useState <object>({});
  const { comments, loading, error } = useTypedSelector((state) => state.comments);
  const { questions } = useTypedSelector((state) => state.questions);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(getComments(postId)as any);
    // await dispatch(getQuestions(postId) as any);
  }

  useEffect(() => {
    console.log("questions ============> DATA==================>", questions);
    // Using an IIFE
    (async function anyNameFunction() {
      await dispatch(getQuestions(postId) as any);
    })();

  }, []);
 
  return (
      <div>
        <div className="row">
            <div className="col-6">
              <h3>Quiz Application</h3>
            </div>
            <div className="col-6 text-right">
              <label className="mr-1">Select Quiz:</label>
              <select onChange={()=>{ return }}>
                {/* {this.state.quizes.map(q => <option key={q.id} value={q.id}>{q.name}</option>)} */}
              </select>
            </div>
        </div>
        {
        questions ? 
        ( <Quiz  allQuestionsData={questions} /> ) : 
        ( <div>Loading...</div> )
      }

      <div>
        <form onSubmit={onSubmitHandler}>
          <input type={"number"} value={postId} onChange={(e) => setPostID(e.target.value)} />\
          <button type="submit"> submit </button>
        </form>
      </div>
      {
        loading ? 
        (
          <div>Loading...</div>
        ) : 
        (
          <ul>
            {
              comments.map((comment) => {
                return(<li key={comment.id}>{comment.body}</li>)
              })
            }
          </ul>
        )
      }
      </div>
  );
}

export default App;