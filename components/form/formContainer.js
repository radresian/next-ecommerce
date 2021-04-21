export default function FormContainer({ children }) {
  return (
    <>
      <div className="formContainer">{children}</div>

      <style jsx>{`
        .formContainer {
          margin-top: 10%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .formContainer .title {
          color: #4d4d4d;
          font-size: 38px;
          text-transform: uppercase;
          font-weight: 1000;
          letter-spacing: 1.65px;
          -webkit-letter-spacing: 1.65px;
          margin-bottom: 32px;
        }
      `}</style>
    </>
  );
}
