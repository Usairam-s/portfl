import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import pr from "../../public/tech-icons/pr.svg";
import ps from "../../public/tech-icons/ps.svg";
import notion from "../../public/tech-icons/notion.svg";
import micro from "../../public/tech-icons/micro.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";
//icons

import StackIcon from "tech-stack-icons";

const icons = [
  sketch,
  canva,
  ai,
  figma,
  chatgpt,
  cloud,
  framer,
  github,
  slack,
  discord,
  youtube,
  chrome,
  pr,
  ps,
  notion,
  micro,
];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@usairam777",
    link: "https://www.instagram.com/usairam777/",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@Usairam71",
    link: "http://x.com/Usairam71",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@usairam-saleem77",
    link: "https://www.linkedin.com/in/usairam-saleem77",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-8">
            {/* {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))} */}
            <StackIcon className="w-14 h-14" name="nextjs2" />
            <StackIcon className="w-14 h-14" name="reactjs" />
            <StackIcon className="w-14 h-14" name="js" />
            <StackIcon className="w-14 h-14" name="typescript" />
            <StackIcon className="w-14 h-14" name="nodejs" />
            <StackIcon className="w-14 h-14" name="figma" />
            <StackIcon className="w-14 h-14" name="tailwindcss" />
            <StackIcon className="w-14 h-14" name="materialui" />
            <StackIcon className="w-14 h-14" name="prisma" />
            <StackIcon className="w-14 h-14" name="mongodb" />
            <StackIcon className="w-14 h-14" name="firebase" />
            <StackIcon className="w-14 h-14" name="supabase" />
            <StackIcon className="w-14 h-14" name="github" />
            <StackIcon className="w-14 h-14" name="slack" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
