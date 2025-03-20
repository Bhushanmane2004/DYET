import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

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
];

function Dashboard() {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Hey Geeks 👋
        </h1>
        <p className="text-slate-600 mt-2 text-base">
          Here are some documents tailored for you
        </p>
      </header>

      <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl flex items-center gap-2">
            📄 Recommended Documents
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View all
          </a>
        </div>

        <Carousel className="w-full mx-auto">
          <CarouselContent className="mx-auto">
            {documents.map((doc, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <a href={doc.link} className="block">
                  <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 border border-slate-100 bg-white h-full">
                    <div className="relative">
                      <img
                        src={doc.preview}
                        alt={doc.title}
                        className="w-full h-35 sm:h-30 md:h-30 object-fill sm:object-cover"
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
            <CarouselPrevious className="bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 h-8 w-8" />
            <CarouselNext className="bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 h-8 w-8" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Dashboard;
