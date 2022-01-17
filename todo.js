function Todo({todo,index,remove}){
  
  const [isCompleted, setIsCompleted] = React.useState(todo.isCompleted);

  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" > <input type='checkbox' checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)} />{todo.text}
  {isCompleted ? <button onClick={handle}>(-)</button > : null}

  </div>
}
