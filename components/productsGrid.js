export default function ProductsGrid({ children }) {
  return (
    <div className="products-grid">
      {children}
      <style jsx>{`
        .products-grid {
          display: grid;
          grid-gap: 28px;
          grid-template-columns: repeat(4, 300px);
        }
        @media (max-width: 1620px) {
          .products-grid {
            grid-template-columns: repeat(3, 300px);
          }
        }
        @media (max-width: 1280px) {
          .products-grid {
            grid-template-columns: repeat(2, 300px);
          }
        }
        @media (max-width: 1000px) {
          .products-grid {
            grid-template-columns: repeat(3, 300px);
          }
        }
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(2, 300px);
          }
        }
        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: repeat(1, 300px);
          }
        }
      `}</style>
    </div>
  );
}
