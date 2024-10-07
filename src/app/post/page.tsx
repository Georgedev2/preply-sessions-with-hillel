// http://localhost:3000/post
const page = async () => {
  // https://jsonplaceholder.typicode.com/posts
  // https://jsonplaceholder.typicode.com/comments
  // no 20 xuy street london uk
  /// no 21 xuy street london uk
  // no 30 xuy street london uk
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const body = await res.json();

  return (
    <div
  
    >
      {body.map((item) => {
        return (
          <div
            style={{
              marginBlock: '30px',
            }}
            key={item.id}
          >
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
