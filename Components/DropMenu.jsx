import { useEffect, useState } from "react";
// Todo not working. maybe adding items on hover and the items will be anchors so the have a href
export function DropMenu(props) {
  const [clickedHome, setClickedHome] = useState(false);
  const [clickedItem, setClickedItem] = useState(false);
  return (
    <>
      <menu>
        <ul class="list-group">
          <li
            className={
              clickedHome ? `list-group-item active` : `list-group-item`
            }
            aria-current="true"
            onClick={function () {
              setClickedHome(!clickedHome);
            }}
          >
            القائمة الرئيسية
            {!clickedHome || (
              <ul>
                <li
                  className={
                    clickedItem ? `list-group-item active` : `list-group-item`
                  }
                >
                  Home
                </li>
              </ul>
            )}
          </li>
        </ul>
      </menu>
      <ul>
        <li>القائمة</li>
      </ul>
      <styke jsx>{``}</styke>
    </>
  );
}
