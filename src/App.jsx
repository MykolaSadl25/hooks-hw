import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import './App.css'
import { useState } from "react";

function App() {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const options = ["good","neutral","bad"]

  const handleClickOnBtn=(evt)=>{
    if (evt.target.dataset.option ==="good") {
      setGood((prev)=>prev+1)
    }
    if (evt.target.dataset.option ==="neutral") {
      setNeutral((prev)=>prev+1)
    }
    if (evt.target.dataset.option ==="bad") {
      setBad((prev)=>prev+1)
    }
}

const countTotalFeedback=()=>{
  const total = good+neutral+bad;
  return total
}

const countPositiveFeedbackPercentage = ()=>{
  let percentage
  if(good === 0){
    percentage=0
    return;
  }
  else{
    percentage = Math.floor((good / countTotalFeedback())*100);
  return percentage
  }
}

  return(
    <>
    <Section text={"Please leave feedback"}>
        <FeedbackOptions options={options} onClick={handleClickOnBtn}></FeedbackOptions>
{good === 0 && neutral === 0 && bad === 0 && (
  <Notification text={"There is no feedback yet"} />
)}

{(good !== 0 || neutral !== 0 || bad !== 0) && (
  <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    countTotal={countTotalFeedback}
    countPercentage={countPositiveFeedbackPercentage}
  />
)}

      </Section>
    </>
  )
}

export default App
