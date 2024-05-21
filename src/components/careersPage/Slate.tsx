import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

interface JobCardType {
  title: string;
  description: string;
}

export interface Config {
  id: string;
  text: string;
  hide: boolean;
  sno: number;
  title?: {
    id: string;
    text: string;
  };
  content?: JobCardType[];
}

export function TypographyH1({
  text,
  id,
  className,
}: {
  className?: string;
  text: string;
  id: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl element",
        className
      )}
      id={id}
    >
      {text ?? "Page Title"}
    </h1>
  );
}

export function TypographyP({
  text,
  id,
  className,
}: {
  className?: string;
  text: string;
  id: string;
}) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6 element", className)}
      id={id}
    >
      {text ?? "Sub-title"}
    </p>
  );
}

export function TypographyH4({
  text,
  id,
  className,
}: {
  className?: string;
  text: string;
  id: string;
}) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight element",
        className
      )}
      id={id}
    >
      {text}
    </h4>
  );
}

export function HeroButton({
  text,
  id,
  className,
}: {
  className?: string;
  text: string;
  id: string;
}) {
  return (
    <Button id={id} className={cn("element", className)}>
      {text}
    </Button>
  );
}

function JobCard({
  className,
  content,
}: {
  className?: string;
  content: JobCardType[];
}) {
  return (
    <div>
      {content.map((item) => (
        <Card
          key={item.title}
          className={cn(
            "flex items-center justify-between w-full gap-3 mb-4",
            className
          )}
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Apply</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function JobCardContainer({
  config,
  className,
}: {
  className: string;
  config: Config;
}) {
  return (
    <div
      id={config.id}
      key={config.sno}
      className={cn(
        "mt-14 flex flex-col gap-4 group container-wrapper p-3",
        className
      )}
    >
      <TypographyH4
        text={config.title?.text ?? ""}
        id={config.title?.id ?? ""}
      />
      <JobCard content={config.content as JobCardType[]} />
    </div>
  );
}

function SelectBox() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a city" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>City</SelectLabel>
          <SelectItem value="paris">Paris</SelectItem>
          <SelectItem value="london">London</SelectItem>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="los angeles">Los Angeles</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function FilterBox({
  className,
  id,
}: {
  className?: string;
  id: string;
}) {
  return (
    <Card className={cn("w-full container-wrapper p-3", className)} id={id}>
      <CardContent>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex items-center gap-3 col-span-3">
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
          <Input placeholder="Search" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Slate({ props }: { props: any }) {
  const heroComponents = Object.entries(props['hero-section']['hero']);
  const bodySectionComponents = Object.entries(props['body-section']);
  const editor =
    props.isEditor &&
    "hover:border hover:border-red-200 rounded-md cursor-pointer";

  return (
    <div className="container">
      <div id="hero-section">
        <div
          className={cn("flex flex-col gap-4 container-wrapper p-3", editor, props.currentContainerId === 'hero' ? 'border-red-200 border': '')}
          id="hero"
        >
          {heroComponents.map((element) => {
            const config = element[1] as Config;
            console.log(config)
            const key = element[0];
            const activeElement =
              props.currentElementId === config.id
                ? editor + " border-red-200 border"
                : editor;
            if (key == "page-title" && !config.hide) {
              return (
                <TypographyH1
                  text={config.text}
                  id={config.id}
                  key={config.sno}
                  className={props.isEditor && activeElement}
                />
              );
            }
            if (key == "page-subtitle" && !config.hide) {
              return (
                <TypographyP
                  text={config.text}
                  id={config.id}
                  key={config.sno}
                  className={cn(props.isEditor && activeElement, "w-1/2")}
                />
              );
            }
            if (key == "page-button" && !config.hide) {
              return (
                <HeroButton
                  text={config.text}
                  id={config.id}
                  key={config.sno}
                  className={cn(props.isEditor && activeElement, "self-start")}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="my-14">
        {bodySectionComponents.map((element) => {
          const config = element[1] as Config;
          const key = element[0];
          if (key == "filter-box" && !config.hide) {
            const activeElement =
              props.currentContainerId === config.id
                ? editor + " border-red-200 border"
                : editor;
            return (
              <FilterBox
                key={config.sno}
                className={props.isEditor && activeElement}
                id={config.id}
              />
            );
          }
          if (key == "job-card" && !config.hide) {
            const activeElement =
              props.currentContainerId === config.id
                ? editor + " border-red-200 border"
                : editor;
            return (
              <JobCardContainer
                key={config.sno}
                className={props.isEditor && activeElement}
                config={config}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
