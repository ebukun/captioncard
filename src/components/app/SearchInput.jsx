import React from "react";
import Input from "../globals/Input";
import Section from "../globals/Section";

const SearchInput = () => {
  return (
    <Section>
      <Input type="text" placeholder="search tags" />
    </Section>
  );
};

export default SearchInput;
