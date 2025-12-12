export default function About() {
  return (
    <div className="flex flex-col min-h-[80vh] justify-center">
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About FoodWay</h1>
        <p className="text-gray-600 mb-4">
          FoodWay is your go-to online food ordering platform. We bring delicious
          meals from your favorite restaurants directly to your doorstep. Our
          mission is to make food delivery fast, easy, and enjoyable.
        </p>
        <p className="text-gray-600 mb-4">
          We prioritize quality, freshness, and timely delivery. Whether you're
          craving pizza, burgers, salads, or desserts, FoodWay has you covered.
        </p>
        <p className="text-gray-600">
          Enjoy a seamless ordering experience and explore a variety of cuisines
          all in one place.
        </p>
      </div>
    </div>
  );
}