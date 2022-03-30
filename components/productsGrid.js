export default function ProductsGrid({ children }) {
  return (
    <div className="products-grid">
      {children}
      <style jsx>{`
        .products-grid {
          display: grid;
          grid-gap: 28px;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media (max-width: 1620px) {
          .products-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
        @media (max-width: 1220px) {
          .products-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media (max-width: 1000px) {
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
