const Note = ({ id, date, content, important }) => {
  return (
    <div>
      <p>
        {" "}
        {date}
        {important}
      </p>
      <p>{id}</p>
      <strong>{content}</strong>
    </div>
  );
};

export default Note;
