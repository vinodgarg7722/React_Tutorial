function TodoItem1(){

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';

    return(
       <div className="container">
  <div className="row kg-row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2 d-flex justify-content-center align-items-center">
      <button type="button" className="btn btn-danger kg-button">Add</button>
    </div>
  </div>
</div>

    );

}

export default TodoItem1;