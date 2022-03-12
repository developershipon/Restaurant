const Product = ({ product }) => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-row flex-wrap gap-5 justify-center py-5">
          {product.map((item) => {
            const { id, category, title, img, price } = item;
            return (
              <div key={id} className="w-72 group">
                <div className="overflow-hidden shadow-xl hover:shadow-none border-2 border-transparent hover:border-slate-300 ease-in-out duration-500 text-center p-5 rounded-2xl">
                  <div className="w-full h-60 rounded-2xl bg-red-400 overflow-hidden">
                    <img src={img} className="w-full h-full" />
                  </div>
                  <div className="py-3 flex justify-between">
                    <h1 className="text-slate-600 font-bold">{title}</h1>
                    <h4 className="text-yellow-500 font-bold">${price}</h4>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-slate-400 text-xs capitalize">
                      {category}
                    </p>
                    <h4 className="text-violet-400 font-bold">{id}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
