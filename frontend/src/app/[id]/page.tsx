"use client";

import Response from "@/components/Response";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { HelpCircleIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { io } from "socket.io-client";

const socket = io("https://cheated-backend.onrender.com/");

const Page = () => {
  const params = useParams();
  const [values, setValues] = useState("");
  const [output] = useState("");
  const [aiRes, setAiRes] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const debounceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      
      socket.emit("join_room", { roomId: params.id });
    }

    return () => {
      if (params.id) {
        socket.emit("leave_room", { roomId: params.id });
      }
    };
  }, [params.id]);

  useEffect(() => {
    const handleNewMessage = (msg: string) => {
      setValues(msg);
    };

    socket.on("new_message", handleNewMessage);

    return () => {
      socket.off("new_message", handleNewMessage);
    };
  }, []);

  const debouncedEmit = useCallback(
    (val: string) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = window.setTimeout(() => {
        socket.emit("chatmessage", { roomId: params.id, message: val });
      }, 1000);
    },
    [params.id]
  );

  const handleChange = (value: string | undefined) => {
    const safeVal = value ?? "";
    setValues(safeVal);
    debouncedEmit(safeVal);
  };

  const handleEvent = async () => {
    if (!values) {
      toast.error("Please Enter Code Before Getting Help", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    try {
      const response = await axios.post("https://cheated-backend.onrender.com//gemini", {
        message: values,
        language: selectedLanguage,
      });

      if (response.status === 500) {
        toast.error("Failed to process the AI request", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      setAiRes(response.data.aiResponse);
      setShowResponse(true);
    } catch {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-(--blue) flex flex-col">
      <nav className="bg-gray-950 p-5 shadow-md sticky top-0 z-10 border-b border-gray-800">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold bg-(--yellow) text-transparent bg-clip-text">
              Lynked
            </h1>
          </Link>
          <div className="space-x-4 flex items-center">
            <select
              className="bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
              name="language"
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="js">JavaScript</option>
              <option value="python">Python</option>
            </select>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <PlayIcon size={18} />
              Run
            </button>

            <button
              onClick={handleEvent}
              className="flex cursor-pointer items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              <HelpCircleIcon size={18} />
              Help
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/3 w-full border border-white p-4 bg-gray-900 text-white mb-4 lg:mb-0">
          <h2 className="text-lg text-(--yellow) font-bold">Output:</h2>
          <p className="whitespace-pre-wrap border border-white w-full h-[90%] break-words">
            {output}
          </p>
        </div>

        <div className="lg:w-2/3 w-full border border-white shadow-md">
          <Editor
            height="90vh"
            value={values}
            onChange={handleChange}
            language={selectedLanguage}
            defaultValue="//Write your problem statement in comments for better AI assistance"
            theme="vs-dark"
            options={{
              fontSize: 16,
              lineHeight: 24,
              automaticLayout: true,
              renderLineHighlight: "none",
              scrollbar: {
                vertical: "auto",
                horizontal: "auto",
              },
            }}
          />
        </div>
      </div>

      {showResponse && aiRes && (
        <Response message={aiRes} onClose={() => setShowResponse(false)} />
      )}

      <ToastContainer />
    </div>
  );
};

export default Page;
