export default function NewJokeRoute() {
  return (
    <div>
      <form action="post">
        <h2>Add your own dad joke</h2>
        <div>
          <label htmlFor="">
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
