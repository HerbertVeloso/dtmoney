import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      line-height: 1.5rem;

      &:first-child {
        color: var(--text-title)
      }

      &.withdraw{
        color: var(--red);
      }

      &.withdraw::before{
        content: "-";
        line-height: 1.5rem;
      }

      &.deposit{
        color: var(--green);
      }
    }
  }

`


