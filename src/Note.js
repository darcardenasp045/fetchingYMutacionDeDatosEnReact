const Note = ({ name, id, number,  }) => {
  return (
    <div>
      <p>{id}</p>
      <p>
        <strong>{name}</strong>
      </p>
      {number}
    </div>
  );
};

export default Note;
