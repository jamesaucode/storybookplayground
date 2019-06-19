import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";

import Image from "./Image";

const catImg = "https://cdn2.thecatapi.com/images/4ndvXwCiI.jpg";
storiesOf("Basic|Image", module)
  .addDecorator(withKnobs)
  .add("Loading", () => (
    <Image
      loading={boolean("Loading", true)}
      imageSrc={text("CatImg", catImg)}
    />
  ))
  .add("Default", () => <Image imageSrc={catImg} />);
