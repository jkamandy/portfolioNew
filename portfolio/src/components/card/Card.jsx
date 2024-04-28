import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import {Button} from "@nextui-org/react";


export default function ProjectCards( {props} ) {
  return (
    
    <div className="flex bg-navbar-dark p-5 w-[22rem] h-[24rem] rounded-3xl">
        <div className="px-1 py-2">
            <div className="text-md font-bold text-light-gray text-start gradient-primary-orange-rev">
                {props.type}
            </div>
            <div className="text-4xl font-bold text-white text-start ">{props.name}</div>
            <br/>
            <div className="text-2xl text-primary-orange font-medium text-start gradient-primary-orange-rev">{props.description}</div>
            <br/>
            <br/>
            <div className="flex tech-used gap-x-[0.5rem]">
            {props.techStack && props.techStack.map((item, index) => (
                <span>{item}</span>
            )
            )}
            </div>
            <br/>
            <div className="flex w-[10rem] justify-center h-10 rounded-2xl border border-light-gray">
                <Button>
                <div className="text-md font-bold text-light-gray w-[10rem] ">
                    CHECK IT OUT
                </div>
                </Button>
            </div>
        </div>
    </div>
  );
}
