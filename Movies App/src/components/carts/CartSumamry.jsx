import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineMenu } from "react-icons/ai";

function CartSumamry() {
  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle style={{ backgroundColor: "black", borderWidth: 0 }}>
          <AiOutlineMenu style={{ fontSize: 25 }}></AiOutlineMenu> Menu
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default CartSumamry;
