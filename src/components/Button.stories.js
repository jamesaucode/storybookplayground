import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

import Button from "./Button";

storiesOf("Basic|Button", module)
  .addDecorator(withKnobs)
  .add("Not Clicked", () => <Button />)
  .add("Clicked", () => <Button clicked={boolean("clicked", true)} />);
