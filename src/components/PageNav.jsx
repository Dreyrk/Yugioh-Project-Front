import React from "react";
import styled from "styled-components";

const PageNavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const PageNavButton = styled.button`
  border: 1px solid;
  padding: 6px;
  border-radius: 2rem;
`;

export default function PageNav({ setPage, page }) {
  return (
    <PageNavContainer>
      {page > 0 ? (
        <PageNavButton
          onClick={() => {
            setPage(page - 1);
          }}>
          Previous
        </PageNavButton>
      ) : (
        <PageNavButton disabled>Previous</PageNavButton>
      )}
      <h5>{page === 0 ? null : page}</h5>
      {page < 228 ? (
        <PageNavButton
          onClick={() => {
            setPage(page + 1);
          }}>
          Next
        </PageNavButton>
      ) : (
        <PageNavButton disabled>Next</PageNavButton>
      )}
    </PageNavContainer>
  );
}
