export const Spinner = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-500 text-lg">Looking for products...</p>
    </div>
  );
};
