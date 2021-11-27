import React from 'react';

function BoilingVeredict (props){
   if(props.celsius >= 100 || props.fahrenheit >=212){
     return  <p>The Water in {props.celsius} °C  and {props.fahrenheit} °F would boil! :P</p>
   }
    return <p>The Water would not boil :L</p>
}

function toCelcius(fahrenheit){
    return (fahrenheit-32) * 5/9;
}
function toFahrenheit (celcius){
    return (celcius * 9/5) + 32;
}
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output= convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}



const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
       this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperatura = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]} </legend>
                <input value={temperatura} onChange = {this.handleChange}/>
            </fieldset>
        );
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature : '',
            scale : 'c'
        }
        this.handleCelciusChange = 
            this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = 
            this.handleFahrenheitChange.bind(this);
    }

    handleCelciusChange(temperature){
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }

   render(){
       const scale  = this.state.scale;
       const temperature = this.state.temperature;
       const celsius = scale === 'f' ? 
                        tryConvert (temperature, toCelcius):
                        temperature;
        const fahrenheit = scale === 'c' ? 
                        tryConvert(temperature, toFahrenheit):
                        temperature;

       return(
           <div>
               <TemperatureInput 
                    scale ="c"
                    temperature={celsius}
                    onTemperatureChange = {this.handleCelciusChange}/>
               <TemperatureInput
                     scale ="f"
                     temperature = {fahrenheit}
                     onTemperatureChange = {this.handleFahrenheitChange}/>
                <BoilingVeredict celsius = {parseFloat(celsius)} fahrenheit = {parseFloat(fahrenheit)}/>
           </div>
       );
   }
}

export default Calculator;

