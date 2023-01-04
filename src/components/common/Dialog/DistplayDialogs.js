import React from "react";
import ConfirmDialog from "./ConfirmDialog";
import Dialog from "./Dialog";

export default function DistplayDialogs() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore error
        adipisci magnam cupiditate voluptatibus, pariatur placeat eius
        reiciendis sequi quod deserunt in maxime unde quibusdam optio, ratione
        ullam asperiores neque.
      </p>
      <Dialog>Witam serdecznie na stronie głównej</Dialog>

      <Dialog title="Testowe Okno">
        <h1>Hello</h1>
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum
          aliquid nam quaerat rerum alias, ea possimus numquam corrupti rem.
          Amet nostrum quis omnis modi quidem voluptatibus, fuga earum vero.
        </p>
      </Dialog>

      <ConfirmDialog title="Confirm Dialog">
        <h1>Confirm Dialog</h1>
      </ConfirmDialog>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam,
        eveniet eligendi blanditiis quasi totam delectus consequatur. Asperiores
        quos porro, ratione et accusamus autem libero dolore quasi nulla maxime
        illo.
      </p>
    </>
  );
}
