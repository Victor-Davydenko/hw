import React from 'react';
import './App.css';

const Picker = ({pickerHandler}) => {
    return (
        <>
            <div onClick={pickerHandler} id='Rectangle'></div>
            <div onClick={pickerHandler} id='Triangle'></div>
            <div onClick={pickerHandler} id='Diamond'></div>
        </>
    );
};

const PresentationComponent = ({figure:{figure,width,height}})=> {
    return(
        <div>
           <span>At the moment</span>
           <span className='figure-name-holder'>{figure ? figure:'nothing'}</span>
            <span>is picked</span>
            <p>Width is {width} px</p>
            <p>Height is {height} px</p>
        </div>
    );
};

class App extends React.Component {
    state = {
        figure: '',
        width: 0,
        height:0
    };

    pickerHandler = (e)=>{
        if(e.target.id === 'Rectangle'||e.target.id === 'Triangle') {
            this.setState({
                figure: e.target.id,
                width : e.target.offsetWidth,
                height: e.target.offsetHeight
            })
        }
        else if(e.target.id === 'Diamond') {
            const width = Math.round(Math.sqrt(Math.pow(e.target.clientWidth,2)+ Math.pow(e.target.clientHeight,2)));
            const height = width;
            this.setState({
                figure: e.target.id,
                width,
                height
            })
        }
    };
    render() {
        return (
            <div className="App">
                <Picker pickerHandler={this.pickerHandler} />
                <PresentationComponent figure={this.state} />
            </div>
        );
    }
}

export default App;
