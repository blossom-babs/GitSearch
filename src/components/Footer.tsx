import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <p className="footer">
        built with <a href="https://reactjs.org/">reactjs</a> .{" "}
        <a href="https://www.typescriptlang.org/typescript">typescript</a> .
        <a href="https://www.apollographql.com/docs/react/get-started/">
          apollo-graphql
        </a>{" "}
        . <a href="https://sass-lang.com/">scss</a> .
        <a href="https://react-icons.github.io/react-icons">React-icon</a>
      </p>
    </footer>
  );
};
