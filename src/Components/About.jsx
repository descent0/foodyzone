export default function About(){
    return (
        <div className="overflow-x-hidden w-screen p-10 mx-auto bg-[#e9f7d5]">
          <h1 className="text-4xl font-bold mb-6">About Recipe Finder</h1>
    
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-6">
            Welcome to <strong>Recipe Finder</strong>, your ultimate companion for discovering, creating, and enjoying 
            a wide variety of delicious recipes. Developed with passion by Dishant Rajput, Recipe Finder aims to make 
            cooking accessible and enjoyable for everyone, regardless of your culinary skills.
          </p>
    
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <h3 className="text-xl font-medium mb-2">Search by Ingredients</h3>
          <p className="mb-4">
            Have a bunch of ingredients at home but not sure what to make? Our innovative search feature allows you 
            to find recipes based on the ingredients you have, minimizing food waste and maximizing your culinary creativity.
          </p>
    
          <h3 className="text-xl font-medium mb-2">Explore New Cuisines</h3>
          <p className="mb-4">
            Embark on a culinary journey around the world with our diverse collection of recipes. From Italian pastas to 
            Thai curries, discover new flavors and cooking techniques that will tantalize your taste buds.
          </p>
    
          <h3 className="text-xl font-medium mb-2">Save Your Favorites</h3>
          <p className="mb-4">
            Found a recipe you love? Save it to your favorites for quick and easy access anytime you want to recreate 
            that perfect dish. Your saved recipes are just a click away, making meal planning and cooking a breeze.
          </p>
    
          <h3 className="text-xl font-medium mb-2">User-Friendly Interface</h3>
          <p className="mb-6">
            Our app is designed with you in mind. The intuitive and clean interface ensures that you can easily navigate 
            through recipes, search options, and your saved favorites, making your cooking experience smooth and enjoyable.
          </p>
    
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            We love hearing from our users! If you have any questions, suggestions, or feedback, please don't hesitate 
            to reach out to us. Your input helps us improve and provide you with the best cooking experience possible.
          </p>
          <p className="mb-6">
            Email us at: <a href="mailto:rajputdishant891@gmail.com" className="text-blue-500 underline">rajputdishant891@gmail.com</a>
          </p>
    
          <div className="text-center mt-10">
            <p className="font-semibold">Developed by Dishant Rajput</p>
            <p>Contact: <a href="mailto:rajputdishant891@gmail.com" className="text-blue-500 underline">rajputdishant891@gmail.com</a></p>
          </div>
        </div>
      );
}
