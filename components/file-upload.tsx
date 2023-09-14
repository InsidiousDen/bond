"use client";

import "@uploadthing/react/styles.css";

import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";

interface FileUploadProps {
  value: string;
  endpoint: "serverImage" | "messageFile";
  onChange: (url?: string) => void;
}

export const FileUpload = ({ value, endpoint, onChange }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="Server image"
          className="rounded-full object-cover"
        />
        <button
          className="bg-rose-500 text-white rounded-full absolute top-0 right-0 shadow-sm"
          onClick={() => onChange("")}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(err) => console.log(err)}
    />
  );
};
