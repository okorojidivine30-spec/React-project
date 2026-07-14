function ClickNumber() {
  return <div className="text-white bg-[#2c2c2a] p-3 rounded-lg">
    <p>You clicked <span>0</span> times.</p>
    <div className="flex gap-5 my-2">
        <button className="bg-gray-700 p-2 w-25 rounded-lg border border-gray-500">Click me</button>
        <button className="bg-black p-2 w-25 rounded-lg border border-gray-500">Reset</button>
    </div>
  </div>;
}
export default ClickNumber;
