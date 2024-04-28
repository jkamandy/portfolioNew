import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function MoreInfoPopover( {popupItems} ) {
  return (
    <Popover placement="right">
        <PopoverTrigger>
            <Button disableRipple={true} className='text-xl text-primary-orange font-bold hover:scale-105'>{popupItems.company}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex bg-navbar-dark p-5 w-[33rem] rounded-3xl">
            <div className="px-1 py-2">
              <div className="text-4xl font-bold text-light-gray">{popupItems.company}</div>
              <div className="text-lg text-primary-orange font-medium">{popupItems.position}</div>
              <br/>
              <div className="text-lg text-light-gray">
                {popupItems.roleDecription}
              </div>
            </div>
          </div>
        </PopoverContent>
    </Popover>
  );
}
