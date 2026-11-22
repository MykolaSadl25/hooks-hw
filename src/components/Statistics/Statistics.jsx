import style from "./Statistics.module.css"

function Statistics({good,neutral,bad,countTotal,countPercentage}){
    return(
        <section>
        <h2 className={style.title}>Statistics</h2>
        <div className={style.div}>
          <p>Positive:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{countTotal()}</p>
          <p>Positive Feedback: {countPercentage()}%</p>
        </div>
      </section>
    )
}

export default Statistics