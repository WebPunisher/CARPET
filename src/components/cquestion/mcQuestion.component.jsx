import React,{useState}  from 'react';

import './mcQuestion.styles.scss';

const McQuestion = props => {

    const {question} = props
    const [nextKey,setNextKey] = useState(2)
    // const [editing,setEditing] = useState(false);
    const [point,setPoint] = useState(0)
    const [text,setText] = useState('')
    const [options,setOptions] = useState([
        {answerText:"",isCorrect:false,key:0},
        {answerText:"",isCorrect:false,key:1},
    ])
    const [image,setImage] = useState(false)
    const [imageURL,setImageURL] = useState('')
    // const [shuffle,setShuffle] = useState(false)
    // const [optionCount,setOptionCount] = useState(2)


    // {
    //     id:19,
    //     type:"MultipleChoice",
    //     points:15,
    //     imageURL: "https://avatars2.githubusercontent.com/u/54589572?s=460&u=b663e9b613864114600790beb68d7d1d45b9cbde&v=4",
    //     questionText:"What is my name and how am I doing well ?",
    //     answerOptions : [
    //         { answerText: 'Talha', isCorrect: true},
    //         { answerText: 'Tayfur', isCorrect: false},
    //         { answerText: 'Sarp', isCorrect: false},
    //         { answerText: 'Kuzey', isCorrect: false},
    //     ]
        
    // },

    const deleteOptionHandler = (key) => {
        console.log("options before delete",options)
        let temp = [...options]
        let filtered = temp.filter( obj =>{
            return obj.key !== key
        })
        setOptions(filtered)
        
    }

    const addOption = () => {
        let exampleOption = { answerText: '', isCorrect: false,key:nextKey}
        setOptions([...options,exampleOption])
        setNextKey(nextKey+1)
    }

    const saveHandler = () => {
        props.editedHandler(question.id,
            {
                id:question.id,
                type:"MultipleChoice",
                imageURL: image?imageURL:null,
                points:point,
                questionText:text,
                answerOptions:options
            });
    }

    const updateState = ( txt, key,value ) => {
        if(txt){
            // console.log("i am in here key =",key,"  value=",value)
            let index=options.findIndex(obj => obj.key === key)
            let newOptions = [...options];
            newOptions[index].answerText =value;
            setOptions(newOptions)
        } else {
            let index=options.findIndex(obj => obj.key === key)
            let newOptions = [...options];
            newOptions[index].isCorrect = !newOptions[index].isCorrect;
            setOptions(newOptions)
        }
        saveHandler()
    }

    return (
        <div className="mcQuestion">
             <div className="questionOrder">Q{props.order+1}</div>
            <div className="questionText">
                <input type="text" className="mcQuestionInput"  placeholder={question.text} onChange={(e)=>setText(e.target.value)}/>
                <input type="text" className="mcPointInput"  placeholder="0" onChange={(e)=>setPoint(Number(e.target.value))}/> 
                {/* <input type="text" className="mcPointInput" placeholder="2" onChange={(e)=>setOptionCount(Number(e.target.value))}/> {optionCount} */}
            </div>
            <div className="options">
                {options.map(option => (
                    <div className="option" key={option.key}>
                        <div><input type="text" className="optionInput" placeholder="Option" onChange={(e)=>updateState(true,option.key,e.target.value)}/></div>
                        <div className="correctness">correct &nbsp;<input type="checkbox" onChange={()=>updateState(false,option.key,false)}/></div>
                        <button className="mcOptionDeleteButton" onClick={()=>deleteOptionHandler(option.key)}>Delete</button>
                     </div>
                ))}
            </div>
            <div className="addOptionDiv">
                <button className="addOption"  onClick={()=>addOption()}> ADD OPTION</button>
                <button className="addOption"  onClick={()=>setImage(!image)}> ADD IMAGE</button>
            </div>
            {/* {options.map(option => (
              <span key={option.key}>{option.answerText} {option.isCorrect ?"true":"not"}</span>
            ))} */}
            {image ? 
            <div className="questionText"><input type="text" className="mcQuestionInput"  placeholder="Image URL" onChange={(e)=>setImageURL(e.target.value)}/></div>
                :
              null
            }
            
            <div className='questionButtons'>
                {/* <div className="correctness">Shuffle &nbsp;<input type="checkbox" onChange={()=>setShuffle(!shuffle)}/></div> */}
                <button className="questionAdd" onClick={()=>saveHandler()}> Save </button>
                <button className="questionDelete" onClick={() =>props.deleteHandler(question.id)}>Delete </button>
            </div>
        </div>
    )
}

export default McQuestion;