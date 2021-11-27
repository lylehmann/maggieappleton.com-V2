import styled from "styled-components";

export default function LinkCard({ children, url, title, author, image }) {
  return (
    <StyledLinkCard>
      {image && <img src={image} alt={title} />}
      <a href={url}>
        <h3>{title}</h3>
      </a>
      {author && <span>{author}</span>}
      <p>{children}</p>
    </StyledLinkCard>
  );
}

const StyledLinkCard = styled.div`
  margin: var(--space-3xs) auto var(--space-m);
  box-shadow: var(--box-shadow-sm);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-tinted-cream);
  justify-content: center;
  padding: var(--space-s) var(--space-m);
  grid-column: 1/4 !important;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: 100%;
  color: var(--color-gray-800);
  transition: all 0.3s ease-in-out;
  span {
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    margin: var(--space-3xs) 0;
    color: var(--color-gray-600);
  }
  h3 {
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    font-family: var(--font-body);
    margin: var(--space-3xs) 0;
    line-height: var(--leading-snug);
    font-size: calc(var(--font-size-md) * 0.9);
  }
  p {
    font-family: var(--font-sans);
    font-size: calc(var(--font-size-sm));
    line-height: var(--leading-base);
    margin: var(--space-3xs) 0;
    color: var(--color-gray-600);
  }
  &:hover {
    box-shadow: var(--box-shadow-lg);
    h3 {
      color: var(--color-bright-crimson);
    }
  }
`;
