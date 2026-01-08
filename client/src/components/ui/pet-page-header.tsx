"use client";

import { Dot, Plus,Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { TextBody,TextTitle } from "./text-styles";

interface PetHeaderProps {
  className?: string;
  petImg?: string;
  petAlt: string;
  petInit: string;
  petName: string;
  petType: string;
  petAge: string;
  onClickSettings: () => void;
  onClickTask: () => void;
}

export function PetHeader(props: PetHeaderProps) {
  return (
    <>
      <div className="mx-[7vw] flex h-[175px] flex-col justify-evenly">
        <div className="flex flex-wrap justify-between">
          <div className="flex">
            <Avatar className="h-[75] w-[75]">
              <AvatarImage
                src={props.petImg}
                alt={props.petAlt}
                className="h-[75] w-[75]"
              />
              <AvatarFallback className="h-[75] w-[75] text-xl">
                {props.petInit}
              </AvatarFallback>
            </Avatar>
            <div className="ml-10 flex flex-col gap-y-2 self-center">
              <TextTitle> {props.petName} </TextTitle>
              <TextBody className="flex">
                {props.petType} <Dot /> {props.petAge}
              </TextBody>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-5 md:mt-0">
            <Button
              className="gap-2 rounded-full bg-gray-700 font-light tracking-wider hover:bg-gray-800"
              onClick={props.onClickSettings}
            >
              <Settings /> Pet Settings
            </Button>
            <Button
              className="gap-2 rounded-full font-light tracking-wider"
              variant="outline"
              onClick={props.onClickTask}
            >
              <Plus /> Add Task
            </Button>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
