const Note = ({ id, userId, title, body }) => {
  return (
    <div>
      <p>{id}</p>
      <p>
        <strong>{title}</strong>
      </p>
      {body}
    </div>
  );
};

export default Note;
