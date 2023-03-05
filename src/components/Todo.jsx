import trash from "../assets/trash.svg";
export default function Todo({ done, text, check, remove }) {
  return (
    <div className="w-full flex items-center pb-5 pt-4  border-b border-b-gray-400">
      <input
        type="checkbox"
        name="done"
        id=""
        checked={done}
        onChange={check}
      />
      <span
        className={`text-xl text-gray-700 font-semibold ml-6 ${
          done && "line-through"
        }`}
      >
        {text}
      </span>
      <button onClick={remove} className="block ml-auto p-2 bg-red-100 rounded-full">
        <img src={trash} alt="" className="w-5 h-5" />
      </button>
    </div>
  );
}
