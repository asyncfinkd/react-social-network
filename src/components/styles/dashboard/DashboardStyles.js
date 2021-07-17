import styled from "styled-components";

export const Container__Alert = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container__AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container__AlertContent = styled.div`
  background-color: var(--color-primary-700);
  padding: 40px;
  gap: 10px;
  border-radius: 8px;
  height: 424px;
  display: flex;
  flex-direction: column;
`;

export const Container__AlertSpan = styled.span`
  color: var(--color-primary-100);
  font-size: 1.5rem;
  font-family: Inter-Bold;
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 4px;
  letter-spacing: 0.5px;
`;

export const Container__AlertSpanChild = styled.span`
  color: gray;
  font-size: 1rem;
  font-family: Inter-Regular;
  letter-spacing: 0.5px;
`;

export const Container__Alert__BirthdaySpan = styled.span`
  color: gray;
  font-family: Inter-Regular;
  font-size: 13px;
`;

export const Container__Alert__BirthdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Container__AlertBirthday__SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 10px;
`;

export const Container__AlertBirthday__Select = styled.select`
  border-radius: 4px;
  color: #ccd0d5;
  font-family: Inter-Regular;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  padding: 0 8px;
  border: none;
  outline: none;
  appearance: none;
  width: 125px;
  background-color: transparent;
  border: 1px solid #ccd0d5;
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png");
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-size: 14px;
  padding-right: 20px;

  &::focus,
  &:active {
    outline: none;
  }
`;

export const Container__AlertGender__Span = styled.span`
  border: 1px solid #ccd0d5;
  display: inline-block;
  flex: 1 0 auto;
  font-weight: normal;
  height: 36px;
  padding: 0;
  position: relative;
  width: auto;
  border-radius: 4px;
  text-align: left;
`;

export const Container__AlertGender__SpanLabel = styled.label`
  color: #1c1e21;
  display: inline-block;
  font-family: Inter-Regular;
  font-size: 12px;
  line-height: 36px;
  padding: 0 28px 0 10px;
  width: 100%;
  color: #ccd0d5;
  font-weight: normal;
  vertical-align: middle;
  text-align: left;
`;

export const Container__AlertGender__SpanInput = styled.input`
  height: 36px;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px;
  background-color: #fff;
  color: #1c1e21;
  font-weight: normal;
  text-align: left;
  outline: none;
`;

export const Container__AlertButton = styled.button`
  border: none;
  outline: none;
  background-color: #fd4d4d;
  width: 100%;
  color: #dee3ea;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
