function Hello() {
  let myName = 'Vinod';
  let fullName = () => {
    return 'vinod Garg';
  };

  return (
    <h3>
      Hello this is the future speaking. Myself {myName}
      <br />
      Hello this is the future speaking. Myself {fullName()}
    </h3>
  );
}

export default Hello;
