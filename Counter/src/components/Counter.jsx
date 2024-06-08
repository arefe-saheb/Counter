const Counter = (props)=>{
    const {Inc,Dec,Reset,count}=props
    return(
        <div>
            <h2>{count}</h2>
            <button className="btn" onClick={Inc}>Increase Number</button>
            <button className="btn" style={count === 0 ? {backgroundColor: "tomato" } : {} } onClick={Dec}>Decrease Number</button>
            <button className="btn" onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;