import React, {useState} from 'react';
import {TextField, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    TextField:{
        '& input':{
            textAlign: 'right'
        }
    }
  }));

export default props => {
    const [result, setResult] = useState('0')
    const [memory, setMemory] = useState()
    const [operator,setOperator] = useState()

    const classes = useStyles();
    const buttonName =  [
        '1','2','3','+',
        '4','5','6','-',
        '7','8','9','X',
        '.','0','=','/',
        'C']

    const handelClick = value => {
        switch(value){
            case('1'):
            case('2'):
            case('3'):
            case('4'):
            case('5'):
            case('6'):
            case('7'):
            case('8'):
            case('9'):
            case('0'):
             return putResult(value) 
            case('+'):
            case('-'):
            case('X'):
            case('/'): 
             return putOperator(value)
            case('='):
             return calculatorResult()
            case('.'):
             return fillDot()
            case('C'):
             return clear()
        }
    }

    const putResult = value => {
        if (result !== '0'){
            setResult(result + value)
        }
        else{
            setResult(value)
        }
    }

    const putOperator = value => {
        setMemory(result)
        setResult('0')
        setOperator(value)

    }

    const calculatorResult = () => {
        setResult (operation(result, memory, operator))
        setOperator('')
        setMemory('0')
    }
    const operation = (valResult, valMem, operator) =>{
        var valResultFloat = parseFloat(valResult)
        var valMemFloat = parseFloat(valMem)

        switch(operator){
           case '+': 
            return valResultFloat + valMemFloat
           case '-': 
            return valMemFloat - valResultFloat  
           case 'X': 
            return valResultFloat * valMemFloat                      
           case '/': 
            return valResultFloat / valMemFloat         
        }
    }

    const fillDot = () =>{
        if (result.includes('.')){}
        else {setResult(result + '.')}
    }

    const clear = () => {
        setResult('0')
        setMemory('0')
        setOperator('')
    }

    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs ={12}>
                <TextField className={classes.TextField} fullWidth variant="outlined" value = {result}/>
            </Grid>
            {
                buttonName.map( (name, key) => <Grid key={key} item xs ={3}>
                    <Button onClick = {()=>handelClick(name)}>{name}</Button>
                </Grid>)
            }
           
        </Grid>
    </div>}