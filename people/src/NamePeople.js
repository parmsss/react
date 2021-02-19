import React ,{useState}  from 'react'; 
import {  Button, Form, FormGroup, Label, Input, /*FormText*/ } from 'reactstrap';
import { useForm } from "react-hook-form";

function NamePeople() {
      const [people, setPeople] = useState([]);
      const [counter, setCounter] = useState(0);
      const { register, handleSubmit } = useForm();

      const onSubmit = data => {
        //{people.map(index=>data)};
        
        console.log(data);
      };
      
      const fieldName = `person[0]`;
      
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
        
            <Form inline >
                <FormGroup className="col-6">
                    <Label for="firstName" className="mr-sm-3 ">First Name</Label>
                    <Input className="col-9"type="text" 
                    name="firstName" id="exampleEmail" placeholder="First Name" />
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="LastName" className="mr-sm-3">Last Name</Label>
                    <Input className="col-9" type="text" name="lastName" id="examplePassword" placeholder="Last Name" />
                </FormGroup>
            </Form>
            <br/>
            <Form inline >
                <FormGroup className="col-6">
                    <Label for="gen" className="mr-sm-3">Gen</Label>
                    <Input className="col-9" type="select" name="selectGen" id="exampleSelect">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="age" className="mr-sm-3">AGE</Label>
                    <Input className="col-9" type="text" name="Age" id="examplePassword" placeholder="your age!!" />
                </FormGroup>
            </Form>
            <br/>
            <Form inline >
                <FormGroup className="col-6">
                    <Label for="nationality" className="mr-sm-3">Nationality</Label>
                    <Input className="col-9" type="select" name="selectNation" id="exampleSelect">
                    <option>Thai</option>
                    <option>English</option>
                    <option>Chinese</option>
                    <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="tellephone" className="mr-sm-3">Tel.</Label>
                    <Input className="col-3" type="select" name="selectTel" id="exampleSelect">
                    <option>+66</option>
                    <option>+77</option>
                    <option>+88</option>
                    </Input>
                    <Input className="col-6" type="text" name="tel" id="examplePassword" placeholder="your number" />
                </FormGroup>
            </Form>
    
            <br/>
            <br/>
            
        
  
            <input type="submit"/>
    </form>
    );
}




export default NamePeople;