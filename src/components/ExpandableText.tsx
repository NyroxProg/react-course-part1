import { useState } from "react";
import styled from "styled-components";

const LinkButton = styled.button`
  font: bold 11px Arial;
  cursor: pointer;
  background-color: #ddd;
  padding: 2px 6px;
  border: 0;
`;

/**
 *
 * @param text The text to truncate
 * @param maxChars The maximum number of characters to show
 * @param breakWords If true, truncate at exactly maxChars even if it splits a word.
 *                   If false, truncate between words at the nearest space <= to maxChars
 *
 */
function truncate(text: string, maxChars: number, breakWords: boolean): string {
  const truncated = text.substring(0, maxChars);
  return breakWords
    ? truncated
    : truncated.substring(0, truncated.lastIndexOf(" "));
}

interface Props {
  maxChars?: number;
  breakWords?: boolean;
  children: string;
}
function ExpandableText({ maxChars = 25, breakWords = true, children }: Props) {
  const [expanded, toggleExpanded] = useState(false);
  const text = expanded ? children : truncate(children, maxChars, breakWords);

  return (
    <>
      {text}
      {children.length > maxChars && (
        <>
          {expanded ? " " : " ... "}
          <LinkButton onClick={() => toggleExpanded((expanded) => !expanded)}>
            {expanded ? "<<" : ">>"}
          </LinkButton>
        </>
      )}
    </>
  );
}

export default ExpandableText;
