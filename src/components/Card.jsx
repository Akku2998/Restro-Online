const Card = (props) => {
  return (
    <div
      key={props.id}
      className="max-w-md bg-white rounded-xl shadow-md overflow-hidden mx-4 relative"
    >
      <div className="md:flex flex-col">
        <div className="md:shrink-0">
          <img
            className="w-full object-cover"
            src={props.url}
            alt={props.alt}
          />
        </div>
        <div
          className="p-4 absolute bottom-0 opacity-80 text-white"
          style={{
            backgroundColor: "#648b8e",
          }}
        >
          <h1 className="text-2xl">{props.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id
            fugit ea explicabo aliquid alias deleniti nemo tempore.
          </p>
          <div className="flex w-full justify-between">
            <div className="p-4">{props.location}</div>
            <button className="bg-white rounded-md opacity-1 text-black p-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
