import { useState } from 'react';

export default function TextArea({ rows, cols, name, placeholder, onChange, value }) {
  function handleChange(event) {
    const { value } = event.target;
    onChange(value);
  }

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />

      <style jsx>{`
        textarea {
          width: 60vw;
          font-size: 15px;
          margin-bottom: 34px;
          color: #4d4d4d;
          font-weight: 500;
          border: none;
          border-radius: 6px;
          background-color: #ffffff;
          box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          padding-bottom: 1.25em;
          padding-top: 1.25em;
          padding-left: 32px;
          box-sizing: border-box;
          resize: none;
        }
        textarea ::placeholder {
          color: #b2b2b2;
          opacity: 1; /* Firefox */
        }
        .textarea :-ms-input-placeholder {
          color: #b2b2b2;
        }
        textarea ::-ms-input-placeholder {
          color: #b2b2b2;
        }
        @media (max-width: 1000px) {
          textarea {
            width: 70vw;
            align-self: center;
          }
        }
        @media (max-width: 800px) {
          textarea {
            width: 75vw;
          }
        }
      `}</style>
    </>
  );
}
