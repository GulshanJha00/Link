"use client";

import Navbar from "@/components/Navbar";
import { Editor } from "@monaco-editor/react";
import { useParams } from "next/navigation";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { io } from "socket.io-client";

// Establish socket connection
const socket = io("http://localhost:3001");

const Page = () => {
  const params = useParams();
  const [values, setValues] = useState("");
  const [output, setOutput] = useState(""); 
  const debounceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (params.id) {
      socket.emit("join_room", { roomId: params.id });
    }

    return () => {
      if (params.id) {
        socket.emit("leave_room", { roomId: params.id });
      }
    };
  }, [params.id]); 

  useEffect(() => {
    const handleNewMessage = (msg:string) => {
      console.log(msg);
      setValues(msg);
    };

    socket.on("new_message", handleNewMessage);

    return () => {
      socket.off("new_message", handleNewMessage);
    };
  }, []); 

  // Debounced emit to send messages
  const debouncedEmit = useCallback(
    (val:string) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = window.setTimeout(() => {
        socket.emit("chatmessage", { roomId: params.id, message: val });
        console.log("Emitted:", val);
      }, 1000); // 1-second debounce time
    },
    [params.id]
  ); 

  const handleChange = (value:string | undefined) => {
    const safeVal = value ?? "";
    setValues(safeVal);
    debouncedEmit(safeVal);
  };



  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar/>
     

        <div className="w-full  rounded-lg shadow-md">
          <Editor
            height="80vh"
            value={values}
            onChange={handleChange} // Use the value directly here
            defaultLanguage="javascript"
            defaultValue="// Start coding here!"
            theme="vs-dark" // Dark theme for a clean look
            options={{
              fontSize: 16, // Make font a bit larger for readability
              lineHeight: 24, // Ensure there's proper spacing between lines
              minimap: { enabled: false }, // Disable minimap to save space
              automaticLayout: true, // Adjust layout automatically based on the size
              renderLineHighlight: "none", // Remove extra highlights to keep it clean
              scrollbar: {
                vertical: "auto",
                horizontal: "auto",
              },
            }}
          />
      </div>
      <div  className="w-full p-4 bg-gray-900 text-white mb-4">
        <h2 className="text-lg text-(--yellow) font-bold">Output:</h2>
        <pre className="whitespace-pre-wrap break-words">{output}</pre>
      </div>
    </div>
  );
};

export default Page;
