import React, { useState } from 'react';
import { Box, Button, Grommet, CheckBox, DateInput,TextInput, FormField, Accordion, AccordionPanel } from 'grommet';

export default function App() {
   const [items, setItems] = useState([]);
   const [title,setTitle] = useState("");
   const [desc,setDesc] = useState("");
   const [dueDate,setDueDate] = useState(""); 

   const handleAdd = () => {
    if (title === "") alert("Please add a title");
    else if (desc === "") alert("Please add a description");
    else if (dueDate === "") alert("Please add a due date");
    else {
      setItems([
        ...items,
        {
          title: title,
          description: desc,
          dueDate: dueDate,
        },
      ]); 
    setTitle("");
    setDesc("");
    setDueDate(""); 
   }
  }

   const TodoItem = ({item})=>{
    const [checkedOff, setCheckedOff] = useState(false);

    const handleCheckOff = (e) => {
      setCheckedOff(!checkedOff);
    };

    const handleDelete = () => {
      setItems(items.filter((i) => i !== item));
    };

    return (
      
        <Box
  direction="row"
  border={{ color: 'brand', size: 'large' }}
  pad="medium"
  background="light-3"
  align='center'

>
  <AccordionPanel label={item.title}>
        {checkedOff ? ( 
          <h1>
            <strike>{item.title}</strike>
          </h1>
        ) : (
          <>
            <h1 style={{ margin: 0 }}>{item.title}</h1>
            <p style={{ margin: 5 }}>{item.description}</p>
            <p style={{ margin: 5 }}>Due: {item.dueDate}</p> 
          </>
        )}
    <CheckBox
        checked={checkedOff}
        label="Complete Task"
        onChange={handleCheckOff}
    />
        <Button label = "Delete Item" onClick={handleDelete}/>
        </AccordionPanel>
        </Box>
    );
  };
  
  const [value, setValue] = React.useState('');
  const [valuea, setValuea] = React.useState('');

  return (
    <div style={{ textAlign: 'center' }}>
     
      <div style={{padding:3}}>
      
      <TextInput
      placeholder="Set Title"
      value={value}
      onChange={(event) => {
        {setValue(event.target.value)
          setTitle(event.target.value)}
        }}
    />
      </div>
      
      
      <div style={{padding:3}}>
      <TextInput 
      placeholder="Set Description"
      value={valuea}
      onChange={(event) => {
        {setValuea(event.target.value)
          setDesc(event.target.value)}
        }}
    />
      </div>
      

      
      <div style={{padding:3}}>
      <DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {setDueDate(value)}}
/>

      </div>
      <div style={{padding:3}}>
      <Button label = "Add Item"onClick={handleAdd}/>
      </div>

      <Accordion>{items.map((item) => (
        <TodoItem item={item}/> 
      ))} 
</Accordion>
      
      </div>   
  ); 
}
