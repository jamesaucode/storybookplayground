import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";
import { withStorySource } from "@storybook/addon-storysource";

import Button from "./Button";

storiesOf("Basic|Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withStorySource)
  .add("Not Clicked", () => <Button />)
  .add("Clicked", () => <Button clicked={boolean("clicked", true)} />);
