import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;
  }

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .input-block + .input-block {
    margin-top: 24px;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input,
  .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  .input-block textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }

  .input-block .unique-image-container {
    position: relative;
  }

  .input-block .images-container img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid #d3e2e5;
  }

  .input-block .images-container .delete-image-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 0 20px 0 20px;
    border: 1px solid #d3e2e5;
    cursor: pointer;
    outline: none;
  }

  .input-block input[type='file'] {
    display: none;
  }

  .input-block .new-image {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .input-block .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
    outline: none;
  }

  .input-block .button-select button.active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  button.confirm-button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
    outline: none;
  }

  button.confirm-button svg {
    margin-right: 16px;
  }

  button.confirm-button:hover {
    background: #36cf82;
  }
`;
