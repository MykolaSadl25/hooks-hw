import style from "./FeedbackOptions.module.css"

function FeedbackOptions({options,onClick}) {
    return(
        <div className={style.div}>
          {options.map(btn=>{
            return <button className={style.button} key={btn} type="button" onClick={onClick} data-option={btn}>{btn}</button>
          })}
        </div>
    )
}

export default FeedbackOptions