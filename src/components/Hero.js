const Hero = ({ data }) => {
  return (
    <div className="hero">
      <h1>{data.restaurant.name}</h1>
      <p>
        Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
        propose des ingrédients simples et sains, du bon pain, des fruits et des
        légumes frais et de saison issus de l’agriculture biologique.
      </p>
    </div>
  );
};

export default Hero;
