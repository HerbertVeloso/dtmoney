import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background-color: var(--shape);
    padding: 2.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.25rem;
      font-weight: 400;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`