import './Netflix.css'
export const CardList = (props: any) => {
    console.log(props)
    const { currElem } = props; //props is having currElem and key. curr elem is an obj so this var currElem will store the currElem being returned i.e. bascially we have destructured things
    //If we dont destruture we can use props.currElem.id etc
    const btn_style = {
      padding: "1.2rem 2.4rem",
      border: "none",
      backgroundColor: "#0062ff"
    }
    return (
        <li className='card'> 
            <div>
              <img src={currElem.img_url} alt="image" height="50%" width="50%"/>
            </div>
            <div className="card-content">
              <h2>Name: {currElem.name}</h2>
              <h3 style={{ margin: "1.2rem 0"}}>rating:<span className={currElem.rating >=8.5 ? 'super_hit' : 'average'}> {currElem.rating} </span></h3>
              {/* first {} → enter JS mode. second {} → object literal */}
              <p style={{ margin: "1.2rem 0"}}>summary: {currElem.description}</p>
              <p style={{ margin: "1.2rem 0"}}>Cast: {currElem.cast}</p>
              <a href = {currElem.watch_url} target="_blank">
                <button style={btn_style}
                >Watch Now</button>
              </a>
            </div>
        </li>
    )
}

// In HTML styling used to add as a style attribute 
{/* <p style={"innerWidth: 22px"}></p> */}
//Inline css in react should be written in the double braces style={{}} i.e. as JS Object
//flex adds space btw each ele  
//Padding is the space inside an element, between its content and its border.
//inline CSS can cause performance issue as in every render, again css is rendered
//The <span> tag is a small inline container used to style or target part of text without breaking the flow.