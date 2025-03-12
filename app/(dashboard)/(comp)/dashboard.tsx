"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const documents = [
  {
    title: "Python",
    category: "Assignments",
    preview: "./PYTHON.jpeg",
    link: "#",
    tagColor: "bg-yellow-300",
    textColor: "text-yellow-800",
  },
  {
    title: "Vector Calculus 1.pdf",
    category: "Lectures",
    preview: "/CS.png",
    link: "#",
    tagColor: "bg-green-300",
    textColor: "text-green-800",
  },
  {
    title: "TIM Summary.pdf",
    category: "Summaries",
    preview: "/JAVA.jpeg",
    link: "#",
    tagColor: "bg-blue-300",
    textColor: "text-blue-800",
  },
  {
    title: "Klausur WS1819.pdf",
    category: "Exams",
    preview: "/CN.jpeg",
    link: "#",
    tagColor: "bg-red-300",
    textColor: "text-red-800",
  },
  {
    title: "ASE-Recap.pdf",
    category: "Summaries",
    preview: "/DBMS.jpeg",
    link: "#",
    tagColor: "bg-blue-300",
    textColor: "text-blue-800",
  },
  {
    title: "Python",
    category: "Assignments",
    preview: "./PYTHON.jpeg",
    link: "#",
    tagColor: "bg-yellow-300",
    textColor: "text-yellow-800",
  },
  {
    title: "Vector Calculus 1.pdf",
    category: "Lectures",
    preview: "/CS.png",
    link: "#",
    tagColor: "bg-green-300",
    textColor: "text-green-800",
  },
  {
    title: "TIM Summary.pdf",
    category: "Summaries",
    preview: "/JAVA.jpeg",
    link: "#",
    tagColor: "bg-blue-300",
    textColor: "text-blue-800",
  },
  {
    title: "Klausur WS1819.pdf",
    category: "Exams",
    preview: "/CN.jpeg",
    link: "#",
    tagColor: "bg-red-300",
    textColor: "text-red-800",
  },
  {
    title: "ASE-Recap.pdf",
    category: "Summaries",
    preview: "/DBMS.jpeg",
    link: "#",
    tagColor: "bg-blue-300",
    textColor: "text-blue-800",
  },
];

function Dashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 ">
      <div className="mb-6">
        <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Hey Geeks 👋
        </h1>
        <p className="text-slate-600 mt-2">
          Here are some documents tailored for you
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">📄</span> Recommended Documents
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View all
          </a>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="md:-ml-4 gap-5">
            {documents.map((doc, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-2 md:basis-1/3 lg:basis-1/5"
              >
                <a href={doc.link} className="block">
                  <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 bg-white h-full">
                    <div className="relative">
                      <img
                        src={doc.preview}
                        alt={doc.title}
                        className="w-full h-30 object-cover"
                      />
                      <span
                        className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${doc.tagColor} ${doc.textColor}`}
                      >
                        {doc.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="text-xs font-semibold text-slate-800 truncate">
                        {doc.title}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-slate-500">Updated</span>
                        <button className="text-xs font-medium text-blue-600 hover:text-blue-800">
                          Open →
                        </button>
                      </div>
                    </div>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="static transform-none translate-y-0 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 h-8 w-8" />
            <CarouselNext className="static transform-none translate-y-0 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 h-8 w-8" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Dashboard;
