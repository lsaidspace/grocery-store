const RemoveButton = ({ onClick }) => (
  <div
    onClick={onClick}
    className="border rounded-full flex items-center justify-center w-8 h-8 clickable"
  >
    <div className="w-[14px] h-[3px] bg-gray-600 rounded" />
  </div>
);

export default RemoveButton;
